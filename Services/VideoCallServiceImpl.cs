using Grpc.Core;
using VideoCall.Grpc;
using System.Threading.Channels;
using System.Threading.Tasks;
using System.Collections.Generic;


public class VideoCallServiceImpl : VideoCallService.VideoCallServiceBase
{
    private static readonly Dictionary<string, Channel<CallResponse>> Clients = new();

    public override async Task JoinCall(JoinRequest request, IServerStreamWriter<CallResponse> responseStream, ServerCallContext context)
    {
        var userChannel = Channel.CreateUnbounded<CallResponse>();
        Clients[request.User] = userChannel;

        await foreach (var message in userChannel.Reader.ReadAllAsync())
        {
            await responseStream.WriteAsync(message);
        }
    }

    public override async Task<SignalAck> SendSignal(SignalMessage request, ServerCallContext context)
    {
        if (Clients.TryGetValue(request.ToUser, out var userChannel))
        {
            await userChannel.Writer.WriteAsync(new CallResponse
            {
                User = request.FromUser,
                Sdp = request.Sdp,
                Type = request.Type
            });
            return new SignalAck { Success = true };
        }

        return new SignalAck { Success = false };
    }
}
