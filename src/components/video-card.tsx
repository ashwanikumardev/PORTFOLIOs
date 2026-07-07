"use client";

import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { PlayIcon } from "lucide-react";
import { useState } from "react";
import { Backlight } from "@/components/ui/backlight";
import { VideoPlayerModal } from "./video-player-modal";

interface VideoCardProps {
  video: {
    title: string;
    description: string;
    thumbnail: string;
    url: string;
    date: string;
  };
}

// blur intensity for the backlight glow; tweak to taste
const BACKLIGHT_BLUR = 32;

export function VideoCard({ video }: VideoCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="group rounded-xl border border-border/60 bg-card/40 p-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:bg-card/70 hover:shadow-lg">
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          aria-label={`Play ${video.title}`}
          className="relative block w-full rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <Backlight blur={BACKLIGHT_BLUR} className="w-full">
            {/* Thumbnail image — loads fast, no iframe overhead */}
            <Image
              src={video.thumbnail}
              alt={video.title}
              width={640}
              height={360}
              loading="lazy"
              placeholder="empty"
              className="aspect-video w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Backlight>
          {/* Play button overlay */}
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="flex size-14 items-center justify-center rounded-full bg-red-600/90 shadow-lg shadow-red-600/25 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600 group-hover:shadow-xl group-hover:shadow-red-600/30">
              <PlayIcon className="size-6 translate-x-[1px] fill-white text-white" />
            </span>
          </span>
        </button>

        <CardHeader className="px-1.5 pt-3 pb-0">
          <CardTitle className="text-lg leading-snug">{video.title}</CardTitle>
          <time className="text-sm text-muted-foreground">
            {formatDate(video.date)}
          </time>
        </CardHeader>
        <CardContent className="px-1.5 pb-1.5 pt-2">
          <p className="text-sm text-muted-foreground line-clamp-2">
            {video.description}
          </p>
        </CardContent>
      </div>

      <VideoPlayerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={video.url}
        videoTitle={video.title}
      />
    </>
  );
}
