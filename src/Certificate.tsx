interface CertificateProps {
  girlfriendName?: string;
}

export function Certificate({ girlfriendName = 'My Love' }: CertificateProps) {
  return (
    <div className="flex flex-col items-center gap-6 sm:gap-8 w-full">
      <div
        className="w-full max-w-2xl bg-gradient-to-br from-amber-50 via-pink-50 to-rose-50
                   p-5 sm:p-8 md:p-12 rounded-2xl shadow-lg"
        style={{
          background:
            'linear-gradient(135deg, #faf5f0 0%, #fce7f3 50%, #ffe4e6 100%)',
          border: '3px solid #d4756a',
          position: 'relative',
        }}
      >
        {/* HEADER */}
        <div className="text-center mb-4 sm:mb-6">
          <div className="text-4xl sm:text-5xl mb-2 sm:mb-3">💍</div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 mb-1 sm:mb-2">
            OFFICIAL VALENTINE'S DAY AFFIDAVIT
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 italic">
            Certificate of Commitment & Exclusive Dating
          </p>
        </div>

        {/* BODY */}
        <div className="border-t-2 border-b-2 border-rose-400 py-5 sm:py-8 mb-6 sm:mb-8 bg-white/50 rounded px-4 sm:px-6">
          <p className="text-center text-sm sm:text-base text-gray-800 mb-5 sm:mb-6 leading-relaxed">
            This is to certify that{' '}
            <span className="font-bold text-rose-600 text-base sm:text-lg">
              {girlfriendName}
            </span>{' '}
            has officially agreed to be my one and only Valentine for
            Valentine's Day and beyond.
          </p>

          <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-700 mb-5 sm:mb-6 font-serif">
            <p className="text-center font-bold text-rose-700 mb-3 sm:mb-4">
              TERMS & CONDITIONS:
            </p>

            <p>
              ✓ <span className="font-semibold">Exclusivity Clause:</span>{' '}
              Said person agrees to date ONLY the undersigned on Valentine's
              Day and every day thereafter.
            </p>

            <p>
              ✓ <span className="font-semibold">Romance Guarantee:</span>{' '}
              Romantic gestures, flowers, and sweet surprises are guaranteed
              and mandatory.
            </p>

            <p>
              ✓ <span className="font-semibold">Cuddle Agreement:</span>{' '}
              Unlimited hugs, cuddles, kisses, and hand-holding permitted at
              all times.
            </p>

            <p>
              ✓ <span className="font-semibold">Forever Clause:</span>{' '}
              This agreement may be renewed indefinitely with sparkly rings
              and more roses.
            </p>
          </div>

          <p className="text-center text-xs sm:text-sm text-gray-700 italic mt-5 sm:mt-6">
            Signed and sealed with love on this{' '}
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>

        {/* SIGNATURES */}
        <div className="flex flex-col sm:flex-row justify-around items-center sm:items-end gap-6 sm:gap-0 mt-6 sm:mt-8 px-4">
          <div className="text-center">
            <p className="text-xs text-gray-700 font-semibold mb-1">
              Justine Louise Pespes
            </p>
            <div className="border-t-2 border-gray-400 pt-1 w-24 mx-auto">
              <p className="text-xs text-gray-700 font-semibold">Wife</p>
              <p className="text-xl mt-1">💕</p>
            </div>
          </div>

          <div className="text-2xl sm:text-3xl">👩🏻‍❤️‍💋‍👨🏻</div>

          <div className="text-center">
            <p className="text-xs text-gray-700 font-semibold mb-1">
              Joshua Verceles
            </p>
            <div className="border-t-2 border-gray-400 pt-1 w-24 mx-auto">
              <p className="text-xs text-gray-700 font-semibold">Husband</p>
              <p className="text-xl mt-1">💖</p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER NOTE */}
      <div className="rounded-xl p-3 max-w-2xl text-center">
        <p className="text-base sm:text-lg text-gray-800 font-semibold">
          Take a Screenshot to Save!
        </p>
      </div>
    </div>
  );
}
