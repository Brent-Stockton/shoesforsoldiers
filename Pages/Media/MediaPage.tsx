import Image from "next/image";

const MediaPage = () => {
  return (
    <div id="media" className="relative text-center p-5 text-white">
      <div className="absolute inset-0 z-0">
        <Image
          alt="army"
          layout="fill"
          objectFit="cover"
          src="/images/flag2.webp"
          className="opacity-20"
        />
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center max-w-4xl mx-auto p-3">
        <h2 className="text-[36px] font-bold mb-6 font-army text-white hover:text-red-900">
          Operation Updates
        </h2>
        <div className="w-full max-w-4xl flex justify-center">
          <iframe
            scrolling="no"
            allow="autoplay; fullscreen"
            src="https://w3.mp.lura.live/player/3.12.16/v3/anvload.html?key=eyJtIjoiRVBGT1giLCJ2IjoiMTQ5NzE0NSIsInRva2VuIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjJhV1FpT2lJeE5USTRNRE0xSWl3aWFYTnpJam9pWW0xUmRqaHVXRTFoYkVOUGIySkNhSFpvY0c4NVpVMVVSVEZQZWs0MGJFUWlMQ0psZUhBaU9qRTNNamcwTWpFeE1EZ3NJbWxoZENJNk1UY3lPRFF4TnpVd09IMC42Nkh2ckVKU3JlT1g3QnRjVldlemZyLUdhXzZld18yZU9KcnVUeVdJdEdFIiwiYXV0b3BsYXkiOnRydWUsImV4cGVjdFByZXJvbGwiOnRydWUsInRyYWNrVGltZVBlcmlvZCI6MSwid2lkdGgiOiIxMDAlIiwiYW52YWNrIjoiYm1RdjhuWE1hbENPb2JCaHZocG85ZU1URTFPek40bEQiLCJzaGFyZUxpbmsiOiJodHRwczovL3d3dy5mb3gxMHBob2VuaXguY29tL3ZpZGVvLzE0OTcxNDUiLCJwbHVnaW5zIjp7ImN1c3RvbUNvbXNjb3JlUGx1Z2luIjp7ImMzIjoiRk9YIDEwIFBob2VuaXgiLCJjNiI6IkZUUyIsImM0IjpudWxsLCJzZXRHZW5yZU5hbWUiOiJOZXdzIiwiYXBwTmFtZSI6IkZPWCAxMCBQaG9lbml4IE5ld3MgQXBwIiwic2NyaXB0IjoiaHR0cHM6Ly9zdGF0aWMuZm94dHYuY29tL3N0YXRpYy9vcmlvbi9zY3JpcHRzL2NvcmUvdXRpbHMvY29tc2NvcmUvTmF0aXZlQ29tc2NvcmVQbHVnaW4uanMiLCJzZGsiOiJodHRwczovL3N0YXRpYy5mb3h0di5jb20vc3RhdGljL29yaW9uL3NjcmlwdHMvY29yZS91dGlscy9jb21zY29yZS9jb21zY29yZS5qcyIsImNsaWVudElkIjoiNjA0MjkwMSIsIm5zX3N0X3N0IjoiS1NBWiIsInRpdGxlIjoiU2hvZXMgZm9yIFNvbGRpZXJzIHwgQ2FyZSBGb3JjZSIsIm5zX3N0X2NpIjoiMTQ5NzE0NSJ9LCJkZnAiOnsiY2xpZW50U2lkZSI6eyJhZFRhZ1VybCI6Imh0dHBzOi8vcHViYWRzLmcuZG91YmxlY2xpY2submV0L2dhbXBhZC9hZHM%252FaXU9LzYzNzkwNTY0L2tzYXpfZm94MTAmZGVzY3JpcHRpb25fdXJsPVtwbGFjZWhvbGRlcl0mZW52PXZwJmltcGw9cyZjb3JyZWxhdG9yPSZ0ZmNkPTAmbnBhPTAmZ2RmcF9yZXE9MSZvdXRwdXQ9dmFzdCZzej0xMDAxeDEwMDEmdW52aWV3ZWRfcG9zaXRpb25fc3RhcnQ9MSZjbXNpZD0yNTM2NzYzJnZpZD0xNDk3MTQ1Iiwia2V5VmFsdWVzIjp7InN0eXBlIjpbIm5ld3MiXSwicHR5cGUiOiJ2aWRlby1jbGlwIiwiYyI6WyJjYXJlLWZvcmNlIiwidmlkZW8iLCJheiIsInZldGVyYW5zLWlzc3VlcyIsIm1pbGl0YXJ5IiwibmV3cyJdLCJkIjoid2ViIiwidXNfcHJpdmFjeSI6bnVsbH19fSwibmF0aXZlSGVhcnRiZWF0UGx1Z2luIjp7InNjcmlwdCI6Imh0dHBzOi8vc3RhdGljLmZveHR2LmNvbS9zdGF0aWMvb3Jpb24vc2NyaXB0cy9jb3JlL3V0aWxzL2Fkb2JlL0N1c3RvbUhlYXJ0YmVhdFBsdWdpbi5qcyIsInNkayI6Imh0dHBzOi8vYXNzZXRzLmFkb2JlZHRtLmNvbS8wZjZiZjkwNGI2MDkvNmRkYWI1YzE3NGU3L2xhdW5jaC1lODA3MWEwNzE5YzEubWluLmpzIiwiYWRkaXRpb25hbFBhZ2VNZXRhIjp7ImZpeFZlcnNpb24iOiI3LjQuMCJ9LCJwbGF5ZXJVbmlxdWVJZCI6InBsYXllci0yMGE2NWVmZi00MjAwLTRjMGEtYmNhNy1kZjAxZmVkZjNmOTkifX0sImh0bWw1Ijp0cnVlLCJmb3JtYXQiOiJtM3U4In0%253D"
            width="640"
            height="360"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MediaPage;
