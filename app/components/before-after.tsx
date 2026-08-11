"use client";

import { useState } from "react";

export default function BeforeAfter({ before, after, label, priority = false, beforeText = "قبل", afterText = "بعد" }: { before: string; after: string; label: string; priority?: boolean; beforeText?: string; afterText?: string }) {
  const [split, setSplit] = useState(52);
  return <div className="compare" style={{"--split":`${split}%`} as React.CSSProperties}>
    <img className="after" src={after} alt={`${label} — ${afterText}`} loading={priority?"eager":"lazy"} fetchPriority={priority?"high":"auto"} decoding="async" width="1280" height="853"/>
    <div className="before"><img src={before} alt={`${label} — ${beforeText}`} loading="lazy" decoding="async" width="1280" height="853"/></div>
    <span className="tag before-tag">{beforeText}</span><span className="tag after-tag">{afterText}</span>
    <input aria-label={`${label}: ${beforeText} / ${afterText}`} type="range" min="10" max="90" value={split} onInput={(e)=>setSplit(Number(e.currentTarget.value))} onChange={(e)=>setSplit(Number(e.currentTarget.value))}/>
  </div>;
}
