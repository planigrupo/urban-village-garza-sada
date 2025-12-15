import { Suspense } from 'react';
import DirectoryCliets from '../components/directory-clients';

export default function DirectoryPage() {
    return (
        <Suspense fallback={<div className="py-16 text-center">Cargando directorio...</div>}>
            <DirectoryCliets />
        </Suspense>
    );
}
