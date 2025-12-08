import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function NotFound() {
    // We can use translations here if we add 'NotFound' namespace or reuse existing keys.
    // For now, hardcoded English/generic or simple text.
    // Ideally should be localized.
    // I'll assume usage of existing keys where possible or simple text.

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
            <h1 className="text-6xl font-bold text-blue-500 mb-4">404</h1>
            <h2 className="text-2xl font-bold mb-8">Page Not Found</h2>
            <Link
                href="/"
                className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition font-medium"
            >
                Go Home
            </Link>
        </div>
    );
}
