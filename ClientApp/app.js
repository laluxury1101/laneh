"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const localVideo = document.getElementById("localVideo");
const remoteVideo = document.getElementById("remoteVideo");
const startCallBtn = document.getElementById("startCall");
const joinCallBtn = document.getElementById("joinCall");
let localStream;
let remoteStream;
let peerConnection;
const servers = {
    iceServers: [
        { urls: "stun:stun.l.google.com:19302" } // Server STUN để xử lý NAT
    ]
};
// Khởi tạo kết nối WebRTC
peerConnection = new RTCPeerConnection(servers);
// Hiển thị stream local (người dùng)
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => {
    localStream = stream;
    if (localVideo) {
        localVideo.srcObject = localStream; // Hiển thị luồng video local
    }
    stream.getTracks().forEach(track => peerConnection.addTrack(track, stream)); // Thêm track vào PeerConnection
})
    .catch(error => {
    console.error("Error accessing media devices.", error);
});
// Xử lý khi nhận được stream remote từ peer khác
peerConnection.ontrack = (event) => {
    if (!remoteStream) {
        remoteStream = new MediaStream();
    }
    if (remoteVideo) {
        remoteVideo.srcObject = remoteStream; // Hiển thị luồng video remote
    }
    remoteStream.addTrack(event.track); // Thêm track của peer vào video remote
};
// Gửi tín hiệu SDP (Session Description Protocol) đến server gRPC
const sendSignal = (sdp, type) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Sending ${type}: `, sdp);
    // Ở đây bạn cần thêm phần gọi gRPC để gửi tín hiệu SDP lên server
});
// Kiểm tra nếu các nút tồn tại trong DOM trước khi gán sự kiện
if (startCallBtn && joinCallBtn) {
    // Khi bắt đầu cuộc gọi
    startCallBtn.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
        const offer = yield peerConnection.createOffer(); // Tạo SDP offer
        yield peerConnection.setLocalDescription(offer); // Thiết lập SDP local
        // Kiểm tra nếu offer.sdp không phải là undefined trước khi gửi qua gRPC
        if (offer.sdp) {
            sendSignal(offer.sdp, "offer"); // Gửi offer qua gRPC
        }
        else {
            console.error("Offer SDP is undefined.");
        }
    }));
    // Khi tham gia cuộc gọi
    joinCallBtn.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
        const answer = yield peerConnection.createAnswer(); // Tạo SDP answer
        yield peerConnection.setLocalDescription(answer); // Thiết lập SDP local
        // Kiểm tra nếu answer.sdp không phải là undefined trước khi gửi qua gRPC
        if (answer.sdp) {
            sendSignal(answer.sdp, "answer"); // Gửi answer qua gRPC
        }
        else {
            console.error("Answer SDP is undefined.");
        }
    }));
}
else {
    console.error("Start Call or Join Call buttons not found in the DOM.");
}
