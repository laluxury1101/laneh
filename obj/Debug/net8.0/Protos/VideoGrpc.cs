// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: Protos/video.proto
// </auto-generated>
// Original file comments:
// Protos/video.proto
#pragma warning disable 0414, 1591, 8981, 0612
#region Designer generated code

using grpc = global::Grpc.Core;

namespace VideoCall.Grpc {
  public static partial class VideoCallService
  {
    static readonly string __ServiceName = "VideoCallService";

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static void __Helper_SerializeMessage(global::Google.Protobuf.IMessage message, grpc::SerializationContext context)
    {
      #if !GRPC_DISABLE_PROTOBUF_BUFFER_SERIALIZATION
      if (message is global::Google.Protobuf.IBufferMessage)
      {
        context.SetPayloadLength(message.CalculateSize());
        global::Google.Protobuf.MessageExtensions.WriteTo(message, context.GetBufferWriter());
        context.Complete();
        return;
      }
      #endif
      context.Complete(global::Google.Protobuf.MessageExtensions.ToByteArray(message));
    }

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static class __Helper_MessageCache<T>
    {
      public static readonly bool IsBufferMessage = global::System.Reflection.IntrospectionExtensions.GetTypeInfo(typeof(global::Google.Protobuf.IBufferMessage)).IsAssignableFrom(typeof(T));
    }

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static T __Helper_DeserializeMessage<T>(grpc::DeserializationContext context, global::Google.Protobuf.MessageParser<T> parser) where T : global::Google.Protobuf.IMessage<T>
    {
      #if !GRPC_DISABLE_PROTOBUF_BUFFER_SERIALIZATION
      if (__Helper_MessageCache<T>.IsBufferMessage)
      {
        return parser.ParseFrom(context.PayloadAsReadOnlySequence());
      }
      #endif
      return parser.ParseFrom(context.PayloadAsNewBuffer());
    }

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::VideoCall.Grpc.JoinRequest> __Marshaller_JoinRequest = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::VideoCall.Grpc.JoinRequest.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::VideoCall.Grpc.CallResponse> __Marshaller_CallResponse = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::VideoCall.Grpc.CallResponse.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::VideoCall.Grpc.SignalMessage> __Marshaller_SignalMessage = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::VideoCall.Grpc.SignalMessage.Parser));
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Marshaller<global::VideoCall.Grpc.SignalAck> __Marshaller_SignalAck = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::VideoCall.Grpc.SignalAck.Parser));

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Method<global::VideoCall.Grpc.JoinRequest, global::VideoCall.Grpc.CallResponse> __Method_JoinCall = new grpc::Method<global::VideoCall.Grpc.JoinRequest, global::VideoCall.Grpc.CallResponse>(
        grpc::MethodType.ServerStreaming,
        __ServiceName,
        "JoinCall",
        __Marshaller_JoinRequest,
        __Marshaller_CallResponse);

    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    static readonly grpc::Method<global::VideoCall.Grpc.SignalMessage, global::VideoCall.Grpc.SignalAck> __Method_SendSignal = new grpc::Method<global::VideoCall.Grpc.SignalMessage, global::VideoCall.Grpc.SignalAck>(
        grpc::MethodType.Unary,
        __ServiceName,
        "SendSignal",
        __Marshaller_SignalMessage,
        __Marshaller_SignalAck);

    /// <summary>Service descriptor</summary>
    public static global::Google.Protobuf.Reflection.ServiceDescriptor Descriptor
    {
      get { return global::VideoCall.Grpc.VideoReflection.Descriptor.Services[0]; }
    }

    /// <summary>Base class for server-side implementations of VideoCallService</summary>
    [grpc::BindServiceMethod(typeof(VideoCallService), "BindService")]
    public abstract partial class VideoCallServiceBase
    {
      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::System.Threading.Tasks.Task JoinCall(global::VideoCall.Grpc.JoinRequest request, grpc::IServerStreamWriter<global::VideoCall.Grpc.CallResponse> responseStream, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

      [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
      public virtual global::System.Threading.Tasks.Task<global::VideoCall.Grpc.SignalAck> SendSignal(global::VideoCall.Grpc.SignalMessage request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

    }

    /// <summary>Creates service definition that can be registered with a server</summary>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    public static grpc::ServerServiceDefinition BindService(VideoCallServiceBase serviceImpl)
    {
      return grpc::ServerServiceDefinition.CreateBuilder()
          .AddMethod(__Method_JoinCall, serviceImpl.JoinCall)
          .AddMethod(__Method_SendSignal, serviceImpl.SendSignal).Build();
    }

    /// <summary>Register service method with a service binder with or without implementation. Useful when customizing the service binding logic.
    /// Note: this method is part of an experimental API that can change or be removed without any prior notice.</summary>
    /// <param name="serviceBinder">Service methods will be bound by calling <c>AddMethod</c> on this object.</param>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    [global::System.CodeDom.Compiler.GeneratedCode("grpc_csharp_plugin", null)]
    public static void BindService(grpc::ServiceBinderBase serviceBinder, VideoCallServiceBase serviceImpl)
    {
      serviceBinder.AddMethod(__Method_JoinCall, serviceImpl == null ? null : new grpc::ServerStreamingServerMethod<global::VideoCall.Grpc.JoinRequest, global::VideoCall.Grpc.CallResponse>(serviceImpl.JoinCall));
      serviceBinder.AddMethod(__Method_SendSignal, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::VideoCall.Grpc.SignalMessage, global::VideoCall.Grpc.SignalAck>(serviceImpl.SendSignal));
    }

  }
}
#endregion
