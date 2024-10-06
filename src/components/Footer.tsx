export default function Footer() {
  return (
    <footer className="bg-[#183153] shadow">
      <div className="mx-auto w-full max-w-screen-xl p-2 md:py-4"> {/* Reduced padding */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://calestial.shop/"
            className="mb-2 flex items-center space-x-3 rtl:space-x-reverse sm:mb-0"
          >
            <span className="self-center whitespace-nowrap text-lg font-semibold text-white"> {/* Reduced text size */}
              Syah Aradea Arganata
            </span>
          </a>
          <ul className="mb-4 flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <a href="#" className="me-3 hover:underline md:me-4"> {/* Adjusted margins */}
                Linkedin
              </a>
            </li>
            <li>
              <a href="#" className="me-3 hover:underline md:me-4"> {/* Adjusted margins */}
                Github
              </a>
            </li>
            <li>
              <a href="#" className="me-3 hover:underline md:me-4"> {/* Adjusted margins */}
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-4 border-gray-600 sm:mx-auto lg:my-6" /> {/* Reduced margins */}
        <span className="block text-xs text-frost-light sm:text-center"> {/* Reduced text size */}
          © {new Date().getFullYear()} . By Syah Aradea.
        </span>
      </div>
    </footer>
  )
}
