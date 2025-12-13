
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Private Page',
    robots: {
        index: false,
        follow: false,
    },
};

export default function PrivatePage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="p-8 text-center">
                <h1 className="text-4xl font-bold mb-4">1</h1>
                <p className="text-gray-400">Private Route</p>
            </div>
        </div>
    );
}
