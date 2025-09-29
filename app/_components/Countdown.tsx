"use client";
import { useEffect, useMemo, useState } from "react";


function format(ms: number) {
const total = Math.max(0, Math.floor(ms / 1000));
const days = Math.floor(total / 86400);
const hours = Math.floor((total % 86400) / 3600);
const minutes = Math.floor((total % 3600) / 60);
const seconds = total % 60;
const pad = (n: number) => n.toString().padStart(2, "0");
return { days, hours: pad(hours), minutes: pad(minutes), seconds: pad(seconds) };
}


export default function Countdown({ target }: { target: number }) {
// Avoid hydration mismatch: render placeholders on SSR, numbers after mount
const [mounted, setMounted] = useState(false);
const [now, setNow] = useState<number>(Date.now());


useEffect(() => {
setMounted(true);
const tick = () => setNow(Date.now());
tick();
const id = setInterval(tick, 1000);
return () => clearInterval(id);
}, []);


const remaining = useMemo(() => (mounted ? target - now : 0), [mounted, now, target]);
const { days, hours, minutes, seconds } = format(remaining);


const Placeholder = () => (
<div className="mt-4 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-lg backdrop-blur">
<TimeBox label="Days" value="--" />
<Colon />
<TimeBox label="Hours" value="--" />
<Colon />
<TimeBox label="Minutes" value="--" />
<Colon />
<TimeBox label="Seconds" value="--" />
</div>
);


if (!mounted) return <Placeholder />;


return (
<div className="mt-4 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-lg backdrop-blur">
<TimeBox label="Days" value={days.toString()} />
<Colon />
<TimeBox label="Hours" value={hours} />
<Colon />
<TimeBox label="Minutes" value={minutes} />
<Colon />
<TimeBox label="Seconds" value={seconds} />
</div>
);
}


function TimeBox({ label, value }: { label: string; value: string }) {
return (
<div className="text-center">
<div className="min-w-14 rounded-lg bg-black/30 px-2 py-1 text-xl font-mono font-semibold tracking-wider">
{value}
</div>
<div className="mt-1 text-[11px] uppercase text-slate-300/80">{label}</div>
</div>
);
}


function Colon() {
return <span className="mx-1 text-lg text-slate-400/80">:</span>;
}