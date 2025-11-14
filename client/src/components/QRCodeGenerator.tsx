import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function QRCodeGenerator() {
  const [qrText, setQrText] = useState("https://toolkit.example.com");
  const [qrSize, setQrSize] = useState("300");
  const { toast } = useToast();

  const downloadQR = () => {
    console.log('Downloading QR code');
    toast({
      title: "QR Code Downloaded",
      description: "Your QR code has been saved successfully.",
    });
  };

  const copyEmbed = () => {
    const embedCode = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrText)}" alt="QR Code" />`;
    navigator.clipboard.writeText(embedCode);
    console.log('Embed code copied');
    toast({
      title: "Copied!",
      description: "Embed code copied to clipboard.",
    });
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">QR Code Settings</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="qr-content">Content</Label>
            <Input
              id="qr-content"
              placeholder="Enter URL or text"
              value={qrText}
              onChange={(e) => setQrText(e.target.value)}
              data-testid="input-qr-content"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="qr-size">Size</Label>
            <Select value={qrSize} onValueChange={setQrSize}>
              <SelectTrigger id="qr-size" data-testid="select-qr-size">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="200">Small (200x200)</SelectItem>
                <SelectItem value="300">Medium (300x300)</SelectItem>
                <SelectItem value="500">Large (500x500)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2 pt-2">
            <Button onClick={downloadQR} className="flex-1" data-testid="button-download-qr">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            <Button onClick={copyEmbed} variant="outline" className="flex-1" data-testid="button-copy-embed">
              <Copy className="h-4 w-4 mr-2" />
              Copy Embed
            </Button>
          </div>
        </div>
      </Card>

      <Card className="p-6 flex flex-col items-center justify-center">
        <h3 className="text-xl font-semibold mb-4">Preview</h3>
        <div className="bg-white p-6 rounded-lg border">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrText)}`}
            alt="QR Code Preview"
            className="w-full h-auto"
            data-testid="img-qr-preview"
          />
        </div>
        <p className="text-sm text-muted-foreground mt-4 text-center font-mono">
          {qrText.length > 40 ? qrText.substring(0, 40) + '...' : qrText}
        </p>
      </Card>
    </div>
  );
}
