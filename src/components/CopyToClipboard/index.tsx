import { Check, Copy } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

interface CopyToClipboardProps {
  text: string;
}

export function CopyToClipboard({ text }: CopyToClipboardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error("Failed to copy:");
    }
  };

  return (
    <button onClick={handleCopy} className="ml-2 text-darkGray hover:text-Gray">
      {copied ? (
        <Check size={16} className="text-medGreen" />
      ) : (
        <Copy size={16} />
      )}
    </button>
  );
}
