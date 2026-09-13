export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray- text-[#64748B]">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            
            <img 
            className="h-8 w-auto" src="../src/assets/logo-text.png" alt="" />
            
            

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
              Build your ideal development stack with the right technologies for
              your next project.
            </p>

            <div className="flex gap-5 text-[#475569] text-sm">
                <a href="#" >Github</a>
                <a href="#">Twitter</a>
                <a href="#">Linkedin</a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-black">Quick Links</h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="transition hover:text-pink-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-pink-400">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-pink-400">
                  Projects
                </a>
              </li> 
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-black">Company</h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="transition hover:text-purple-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-purple-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-purple-400">
                  Career
                </a>
              </li>

            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 font-semibold text-black">LEGAL</h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="transition hover:text-purple-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-purple-400">
                  Terms of Service
                </a>
              </li>

            </ul>
          </div>
          
          </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-gray-800 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 DevStack. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="transition hover:text-purple-800">
              Privacy
            </a>

            <a href="#" className="transition hover:text-purple-800">
              Terms
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}
