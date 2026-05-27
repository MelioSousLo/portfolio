// ─── Footer ─────────────────────────────────────────────
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="px-6 md:px-20 py-6 max-w-6xl mx-auto border-t border-white/10 flex justify-between text-xs text-white/30">
      <span>{t('footer.copyright')}</span>
      <span>{t('footer.made')}</span>
    </footer>
  );
}