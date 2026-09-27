export default function CodePiece() {
    return (
      <div className="w-fit bg-mist-800/80 px-4 py-3 font-mono text-sm">
        <span className="text-blue-400">const</span>{" "}
        <span className="text-mist-200">socket</span>{" "}
        <span className="text-mist-400">=</span>{" "}
        <span className="text-yellow-400">new</span>{" "}
        <span className="text-green-400">WebSocket</span>
        <span className="text-mist-200">(url);</span>
      </div>
    );
  }