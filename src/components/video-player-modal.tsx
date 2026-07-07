"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  videoTitle?: string;
}

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsedUrl = new URL(url);
    const shortsMatch = parsedUrl.pathname.match(/\/shorts\/([^/?]+)/);
    const embedMatch = parsedUrl.pathname.match(/\/embed\/([^/?]+)/);
    const videoId =
      shortsMatch?.[1] ||
      embedMatch?.[1] ||
      parsedUrl.searchParams.get("v") ||
      (parsedUrl.hostname === "youtu.be" ? parsedUrl.pathname.slice(1) : "");

    if (!videoId) return "";

    // Embed params to hide YouTube branding/links and show only basic controls:
    // autoplay=1        - auto-play when modal opens
    // rel=0             - no related videos at the end
    // modestbranding=1  - hide YouTube logo from controls
    // showinfo=0        - hide video title/uploader info
    // iv_load_policy=3  - hide annotations
    // controls=1        - show only basic player controls (play, seek, volume, fullscreen)
    // playsinline=1     - inline playback on mobile
    // disablekb=0       - allow keyboard seek (arrow keys for forward/backward)
    // fs=1              - allow fullscreen
    // cc_load_policy=0  - don't auto-show captions
    const params = new URLSearchParams({
      autoplay: "1",
      rel: "0",
      modestbranding: "1",
      showinfo: "0",
      iv_load_policy: "3",
      controls: "1",
      playsinline: "1",
      disablekb: "0",
      fs: "1",
      cc_load_policy: "0",
    });

    return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
  } catch {
    return "";
  }
}

function isYouTubeUrl(url: string) {
  return url.includes("youtube.com") || url.includes("youtu.be");
}

export function VideoPlayerModal({ isOpen, onClose, videoUrl, videoTitle }: VideoPlayerModalProps) {
  const isYouTube = isYouTubeUrl(videoUrl);
  const embedUrl = isYouTube ? getYouTubeEmbedUrl(videoUrl) : videoUrl;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] md:max-w-[80vw] lg:max-w-[1200px] p-2 md:p-4 h-auto">
        <DialogHeader className="mb-2">
          <DialogTitle className="text-base md:text-lg line-clamp-1">
            {videoTitle || "Watch Video"}
          </DialogTitle>
        </DialogHeader>
        <div className="relative w-full aspect-video">
          {isYouTube ? (
            <iframe
              src={embedUrl}
              title={videoTitle || "Video player"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full rounded-lg"
              style={{ border: "none" }}
            />
          ) : (
            <video
              src={embedUrl}
              controls
              autoPlay
              className="w-full h-full rounded-lg"
              style={{ backgroundColor: "black" }}
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
