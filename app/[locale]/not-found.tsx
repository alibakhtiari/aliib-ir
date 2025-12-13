import { useTranslations } from "next-intl"
import Link from 'next/link';

export const metadata = {
    title: 'Page Not Found',
    robots: { index: false, follow: false },
};

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-4">
            <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-center max-w-md">
                Could not find requested resource. It might have been moved or deleted.
            </p>
            <Link
                href="/"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
                Return Home
            </Link>
        </div>
    );
}
