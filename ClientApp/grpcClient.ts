import { grpc } from '@improbable-eng/grpc-web';
import { VideoCallServiceClient } from './VideoServiceClientPb' // Import service từ gRPC protobuf
import { SignalMessage, JoinRequest } from './video_pb'; // Import các message cần thiết từ gRPC

const grpcHost = "http://localhost:5275"; // Thay bằng địa chỉ gRPC server của bạn

const client = new VideoCallServiceClient(grpcHost);

export const sendOfferSignal = (sdp: string, fromUser: string, toUser: string) => {
  const signalMessage = new SignalMessage();
  signalMessage.setSdp(sdp);
  signalMessage.setType("offer");
  signalMessage.setFromuser(fromUser);  
  signalMessage.setTouser(toUser);

  client.sendSignal(signalMessage, {}, (err, response) => {
    if (err) {
      console.error("Failed to send offer:", err);
    } else {
      console.log("Offer sent successfully", response.toObject());
    }
  });
};

export const sendAnswerSignal = (sdp: string, fromUser: string, toUser: string) => {
  const signalMessage = new SignalMessage();
  signalMessage.setSdp(sdp);
  signalMessage.setType("answer");
  signalMessage.setFromuser(fromUser);
  signalMessage.setTouser(toUser);

  client.sendSignal(signalMessage, {}, (err, response) => {
    if (err) {
      console.error("Failed to send offer:", err);
    } else {
      console.log("Offer sent successfully", response.toObject());
    }
  });
};
