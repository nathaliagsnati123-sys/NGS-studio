import React, { useState } from 'react';
import { X, Upload, Check, Link as LinkIcon, RefreshCw } from 'lucide-react';

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: string;
  onSavePhoto: (url: string) => void;
  onReset: () => void;
}

export const PhotoModal: React.FC<PhotoModalProps> = ({
  isOpen,
  onClose,
  currentPhoto,
  onSavePhoto,
  onReset,
}) => {
  const [inputUrl, setInputUrl] = useState(currentPhoto || '');
  const [preview, setPreview] = useState(currentPhoto || '');

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setPreview(result);
        setInputUrl(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onSavePhoto(preview);
    onClose();
  };

  const handleClear = () => {
    setPreview('');
    setInputUrl('');
    onReset();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-xl max-w-md w-full border border-neutral-200 p-6 shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700 p-1"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-lg font-bold text-neutral-900 mb-1">
          Personalizar Fotografia Profissional
        </h3>
        <p className="text-xs text-neutral-500 mb-5 leading-relaxed">
          Faça um teste de pré-visualização da sua foto ou cole a URL. A substituição definitiva no código é feita no arquivo <code className="text-neutral-800 font-mono bg-neutral-100 px-1 py-0.5 rounded">src/config/siteConfig.ts</code>.
        </p>

        {/* Pré-visualização atual */}
        <div className="mb-5 flex justify-center">
          <div className="w-28 h-36 rounded-lg bg-neutral-100 border border-neutral-200 overflow-hidden flex items-center justify-center">
            {preview ? (
              <img src={preview} alt="Pré-visualização" className="w-full h-full object-cover" />
            ) : (
              <span className="text-[11px] text-neutral-400 text-center px-2">Espaço reservado (sem foto)</span>
            )}
          </div>
        </div>

        {/* Upload de arquivo */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-xs font-semibold text-neutral-700 mb-1.5 flex items-center gap-1.5">
              <Upload className="w-3.5 h-3.5 text-amber-700" />
              <span>Carregar arquivo do seu computador para testar:</span>
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="w-full text-xs text-neutral-600 file:mr-3 file:py-1.5 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-neutral-100 file:text-neutral-800 hover:file:bg-neutral-200 cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-700 mb-1.5 flex items-center gap-1.5">
              <LinkIcon className="w-3.5 h-3.5 text-amber-700" />
              <span>Ou cole o link direto da imagem:</span>
            </label>
            <input
              type="text"
              value={inputUrl.startsWith('data:') ? '' : inputUrl}
              onChange={(e) => {
                setInputUrl(e.target.value);
                setPreview(e.target.value);
              }}
              placeholder="https://exemplo.com/sua-foto.jpg"
              className="w-full px-3 py-2 text-xs rounded border border-neutral-300 focus:outline-none focus:border-neutral-900"
            />
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="flex items-center justify-between gap-3 pt-4 border-t border-neutral-100">
          <button
            onClick={handleClear}
            className="text-xs text-neutral-500 hover:text-neutral-900 flex items-center gap-1 font-medium"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Restaurar padrão</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 text-xs font-medium text-neutral-600 hover:text-neutral-900"
            >
              Cancelar
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-1.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-md flex items-center gap-1.5"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Aplicar no Site</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
