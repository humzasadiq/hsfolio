import { useState } from "react";

export default function Gallery() {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const photos = [
        "https://lh3.googleusercontent.com/pw/AP1GczOgl7y69E_vtx_aykd0fGczaTYH425ylcbA1us9EkCK-8vD-xEEvgMHwAS3arh_nXMJAC6bhnXxQ7hNgbaUb2RQzxlFrAQjHk9uE3-RTnz6iMw-Myxu5dsMWOwEbd7WAy0zFxgrouf9rnsVYHPVK81IfQ=w689-h919-s-no-gm?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczPgPTdV-B-zjqlXdfcHkYdfXzTA_kARyPAhiaNIhrs0yXKGmLWvIxwS8Vpr8Tdq8Mchl5IzS5yhoI-SACtsrzi22rptlkf69EjLI4QZTeTUlTEhhEh0CflPb7dgLLeLQ-h0itj2OPa1sWeRXHcTSODECg=w689-h919-s-no-gm?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczMs4TLASv6k5YliTkIhaZr5HwhWOGu8m8i7xb3779mIDNJNngu0EYfs0GysIcWcrY-c-4ZARkBTusPpu0QyW-NlU3XvNEwAJb6Did6gtMZaUZIk3LT-zpCQB0Wagq4_090XkiOhHt6Y1WZepdlsUglXVw=w689-h919-s-no-gm?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczNj924uye-yRgUCsiD4s7HS6Q8f1JExrXRkhx20wi7OH0sbsaq5c4jhUvr76buTIvHXMJSI-zEo8bAcwaLtFGS9twyIXA74upJQt-RoAyN68G6Y10xTVU5ptgi2EcGeqfcRsLaExoH4DGPjXYsXsYBspg=w689-h919-s-no-gm?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczM105tmxSb7V9HTtQoqJSPzEp0KGDN--hQzjf4DXERsnbdxm2XIRVGejyCozR1mZyeE040Bpaf8z2xq07n1QyDNe7iqQbK5mFCh9utvxbgxjSOH2E0dTk7yGByhSk99nLrzmIl4RFNazzCFqsA3p0JAHg=w689-h919-s-no-gm?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczNfFkkwycTXt_YNAhl4eD4uM1teFZGFhZKYwum9mPDnbZ98GkxfsUHfpi4G2sNDsL5aPlyQB-5ZbRmkeIwvx5sWQ8l5sh0xryJ7X5v_CVpReRHuUFmQfqVqrHV4rxYmGlewopbHmQAuAnYrqod9WfBrPg=w689-h919-s-no-gm?authuser=0",
    ];

    const handlePhotoClick = (index) => {
        setSelectedPhoto(index);
    };

    const handleClose = () => {
        setSelectedPhoto(null);
    };

    return (
        <div className="xl:w-[1200px] md:mx-auto min-h-screen border-x border-zinc-100 dark:border-zinc-800 bg-[#FBFAF8] dark:bg-zinc-950">
            <h2 className="heading-myfont text-2xl font-bold text-center py-4 pt-20 text-black dark:text-zinc-100">
                <span>Gallery</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {photos.map((photo, index) => (
                    <div
                        key={index}
                        className="cursor-pointer transform transition-transform duration-300 hover:scale-105"
                        onClick={() => handlePhotoClick(index)}
                    >
                        <img
                            src={photo}
                            alt={`Art ${index + 1}`}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                ))}
            </div>

            {selectedPhoto !== null && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
                    onClick={handleClose}
                >
                    <div className="relative max-w-full max-h-full">
                        <img
                            src={photos[selectedPhoto]}
                            alt={`Art ${selectedPhoto + 1}`}
                            className="max-w-full max-h-full rounded-lg shadow-2xl"
                        />
                        <button
                            className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors"
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent closing when button is clicked
                                handleClose();
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}