const localVideo = document.getElementById("localVideo") as HTMLVideoElement | null;
const remoteVideo = document.getElementById("remoteVideo") as HTMLVideoElement | null;
const startCallBtn = document.getElementById("startCall") as HTMLButtonElement | null;
const joinCallBtn = document.getElementById("joinCall") as HTMLButtonElement | null;

let localStream: MediaStream;
let remoteStream: MediaStream;
let peerConnection: RTCPeerConnection;

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
const sendSignal = async (sdp: string, type: string) => {
  console.log(`Sending ${type}: `, sdp);
  // Ở đây bạn cần thêm phần gọi gRPC để gửi tín hiệu SDP lên server
};

// Kiểm tra nếu các nút tồn tại trong DOM trước khi gán sự kiện
if (startCallBtn && joinCallBtn) {
    // Khi bắt đầu cuộc gọi
    startCallBtn.addEventListener("click", async () => {
      const offer = await peerConnection.createOffer(); // Tạo SDP offer
      await peerConnection.setLocalDescription(offer); // Thiết lập SDP local
      
      // Kiểm tra nếu offer.sdp không phải là undefined trước khi gửi qua gRPC
      if (offer.sdp) {
        sendSignal(offer.sdp, "offer"); // Gửi offer qua gRPC
      } else {
        console.error("Offer SDP is undefined.");
      }
    });
  
    // Khi tham gia cuộc gọi
    joinCallBtn.addEventListener("click", async () => {
      const answer = await peerConnection.createAnswer(); // Tạo SDP answer
      await peerConnection.setLocalDescription(answer); // Thiết lập SDP local
      
      // Kiểm tra nếu answer.sdp không phải là undefined trước khi gửi qua gRPC
      if (answer.sdp) {
        sendSignal(answer.sdp, "answer"); // Gửi answer qua gRPC
      } else {
        console.error("Answer SDP is undefined.");
      }
    });
  } else {
    console.error("Start Call or Join Call buttons not found in the DOM.");
  }
  