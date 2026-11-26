export interface SiteIcon {
  bytes: Uint8Array;
  mimeType: 'image/png' | 'image/jpeg' | 'image/webp' | 'image/x-icon';
}

export interface PreviewImage {
  bytes: Uint8Array;
  mimeType: 'image/png' | 'image/jpeg' | 'image/webp';
}

export interface LinkPreviewProvider {
  icon(origin: string): Promise<SiteIcon | null>;
  image?(url: string): Promise<PreviewImage | null>;
}
