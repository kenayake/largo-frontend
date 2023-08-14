import Image from "next/image";

export default function Collab() {
  return (
    <section id="collab" >
      <div className="flex flex-col items-center justify-center w-full md:py-10 mt-16 sm:-mr-5">
        <h1 className="font-medium leading-relaxed tracking-widest text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 text-center">
          Our Latest Collaboration
        </h1>
        <button className="relative w-20 h-20" title="View More" type="button">
          <div className="peer/button z-10 w-[60px] h-[60px] left-[70px] top-[70px] absolute origin-top-left rotate-180 rounded-lg hover:bg-[#aaa18e]">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-180"
            >
              <g id="bi:arrow-down-left-circle">
                <g clipPath="url(#clip0_38_69)">
                  <g id="Vector">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M56.25 30C56.25 23.0381 53.4844 16.3613 48.5616 11.4384C43.6387 6.51562 36.9619 3.75 30 3.75C23.0381 3.75 16.3613 6.51562 11.4384 11.4384C6.51562 16.3613 3.75 23.0381 3.75 30C3.75 36.9619 6.51562 43.6387 11.4384 48.5616C16.3613 53.4844 23.0381 56.25 30 56.25C36.9619 56.25 43.6387 53.4844 48.5616 48.5616C53.4844 43.6387 56.25 36.9619 56.25 30ZM0 30C0 22.0435 3.16071 14.4129 8.7868 8.7868C14.4129 3.16071 22.0435 0 30 0C37.9565 0 45.5871 3.16071 51.2132 8.7868C56.8393 14.4129 60 22.0435 60 30C60 37.9565 56.8393 45.5871 51.2132 51.2132C45.5871 56.8393 37.9565 60 30 60C22.0435 60 14.4129 56.8393 8.7868 51.2132C3.16071 45.5871 0 37.9565 0 30ZM22.14 40.7025C21.7879 41.0541 21.3106 41.2514 20.813 41.251C20.3155 41.2507 19.8385 41.0527 19.4869 40.7006C19.1353 40.3485 18.938 39.8712 18.9383 39.3737C18.9387 38.8761 19.1367 38.3991 19.4887 38.0475L34.8488 22.6875H24.4688C23.9715 22.6875 23.4946 22.49 23.1429 22.1383C22.7913 21.7867 22.5938 21.3098 22.5938 20.8125C22.5938 20.3152 22.7913 19.8383 23.1429 19.4867C23.4946 19.135 23.9715 18.9375 24.4688 18.9375H39.375C39.8723 18.9375 40.3492 19.135 40.7008 19.4867C41.0525 19.8383 41.25 20.3152 41.25 20.8125V35.7188C41.25 36.216 41.0525 36.6929 40.7008 37.0446C40.3492 37.3962 39.8723 37.5938 39.375 37.5938C38.8777 37.5938 38.4008 37.3962 38.0492 37.0446C37.6975 36.6929 37.5 36.216 37.5 35.7188V25.3387L22.14 40.7025Z"
                      fill="#031723"
                    />
                    <path
                      d="M19.6655 38.2243L19.6654 38.2244C19.3602 38.5291 19.1886 38.9426 19.1883 39.3739C19.188 39.8051 19.359 40.2188 19.6638 40.524C19.9685 40.8291 20.382 41.0007 20.8132 41.001C21.2444 41.0013 21.6581 40.8304 21.9632 40.5257L19.6655 38.2243ZM19.6655 38.2243L35.0255 22.8643L35.4523 22.4375H34.8488H24.4688C24.0378 22.4375 23.6245 22.2663 23.3197 21.9615C23.015 21.6568 22.8438 21.2435 22.8438 20.8125C22.8438 20.3815 23.015 19.9682 23.3197 19.6635C23.6245 19.3587 24.0378 19.1875 24.4688 19.1875H39.375C39.806 19.1875 40.2193 19.3587 40.524 19.6635C40.8288 19.9682 41 20.3815 41 20.8125V35.7188C41 36.1497 40.8288 36.5631 40.524 36.8678C40.2193 37.1725 39.806 37.3438 39.375 37.3438C38.944 37.3438 38.5307 37.1725 38.226 36.8678C37.9212 36.5631 37.75 36.1497 37.75 35.7188V25.3387V24.7351L37.3232 25.162L21.9633 40.5256L19.6655 38.2243ZM56.5 30C56.5 22.9718 53.708 16.2314 48.7383 11.2617C43.7686 6.29196 37.0282 3.5 30 3.5C22.9718 3.5 16.2314 6.29196 11.2617 11.2617C6.29196 16.2314 3.5 22.9718 3.5 30C3.5 37.0282 6.29196 43.7686 11.2617 48.7383C16.2314 53.708 22.9718 56.5 30 56.5C37.0282 56.5 43.7686 53.708 48.7383 48.7383C53.708 43.7686 56.5 37.0282 56.5 30ZM0.25 30C0.25 22.1098 3.38437 14.5428 8.96357 8.96357C14.5428 3.38437 22.1098 0.25 30 0.25C37.8902 0.25 45.4572 3.38437 51.0364 8.96357C56.6156 14.5428 59.75 22.1098 59.75 30C59.75 37.8902 56.6156 45.4572 51.0364 51.0364C45.4572 56.6156 37.8902 59.75 30 59.75C22.1098 59.75 14.5428 56.6156 8.96357 51.0364C3.38437 45.4572 0.25 37.8902 0.25 30Z"
                      stroke="#E8EAEA"
                      strokeOpacity="0.2"
                      strokeWidth="0.5"
                    />
                  </g>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_38_69">
                  <rect
                    x="60"
                    y="60"
                    width="60"
                    height="60"
                    rx="8"
                    transform="rotate(180 60 60)"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="absolute top-0 left-0 w-20 h-20 rounded-full bg-[#DFD3BB] peer-hover/button:bg-[#aaa18e]" />
        </button>
      </div>
      <div className="flex content-center justify-center w-full md:h-screen mt-10 mb-20">
        <div className="relative w-fit h-fit">
          <Image
            src="/landing_page/images/uwxlargo.jpeg"
            alt=""
            className="object-contain my-auto"
            width={(1080 * 70) / 100}
            height={(1080 * 70) / 100}
          />
          <div className="absolute inset-0 top-0 z-10 flex flex-col justify-start w-full h-auto py-6 pl-6 space-y-6 overflow-y-auto text-xl text-center duration-300 opacity-0 peer/collab hover:opacity-100">
            <p>
              Setelah resmi meluncurkan brand dan produk eBike nya April lalu,
              kini LARGO berkolaborasi dengan UNIONWELL, sebagai brand fesyen
              apparel “artisan” yang desain dan illustrasi nya merupakan karya
              dari David bayu sebagai salah satu ownernya.
            </p>
            <p>
              Kolaborasi 2 brand lokal yang memiliki kesamaan dan keunikan khas
              bergenre vintage style ini akan mewujud pada sebuah sepeda listrik
              dan beberapa turunan fashion apparel (wind breaker, jumper
              sweater, Tshirt, pos bag) dengan edisi sangat terbatas. Sepeda
              listrik yang hanya di produksi 1 unit ini juga melibatkan Ilham
              herry seniman hand lettering yang memberi sentuhan khusus ornament
              grafis dengan material gold leaf 24k, menjadikan produk kolaborasi
              ‘handcrafted’ yang sangat menarik untuk dinikmati/dimiliki.
            </p>
            <p>
              Dengan segala nilai keunikan tersebut, project kolaborasi sepeda
              listrik vintage ini akan di lelang pada kanal IG: @unionwell 20-23
              Oktober 2021 pukul 23.59 WIB, sebagian hasil lelang akan di
              donasikan. Tujuan dari pelelangan karya ini sebagai upaya edukasi
              cinta produk lokal karya anak bangsa berkualitas
              setinggi-tingginya
            </p>
            <p>
              Ditengah kondisi pandemi nyatanya para pelaku UKM produk lokal
              berusaha terus menghidupkan sektor industri masing-masing, Baim
              wong sebagai salah satu owner Largo eBike pun memiliki
              ketertarikan yang sangat kuat terhadap industri produk lokal. Baim
              wong dan David bayu dalam projek kolaborasi ini merupakan bentuk
              spirit tokoh selebritas mendorong roda2 kecil industri produk
              lokal terus bergerak inovatif. Semangat kolaboratif UNIONWELL X
              LARGO sepertinya akan berkelanjutan dengan adanya inisiasi dan
              eksplorasi untuk karya selanjutnya yang akan dikerjakan bersama.
            </p>
            <p>
              Dikemas dalam sebuah event tahunan UNIONVILLE, produk kolaborasi
              ini akan diluncurkan pada 23-24 Oct 2021 di Mblock Space Jakarta,
              (riding parade, fashion show, music performance, vintage market,
              dll) merupakan konsep acara yang tentunya menarik dan memiliki
              daya magnet tersendiri untuk di kunjungi.
            </p>
            <p>#lokalpride</p>
          </div>
          <div className="absolute inset-0 duration-300 bg-black opacity-0 peer-hover/collab:opacity-70"></div>
        </div>
      </div>
    </section>
  );
}
