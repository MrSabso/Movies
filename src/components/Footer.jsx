const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-10 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">

          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <ul className="flex flex-wrap gap-4 text-gray-400">
              <li>
                <h6 href="#" className="hover:text-white">
                  About us
                </h6>
              </li>
              <li>
                <h6 href="#" className="hover:text-white">
                  Blog
                </h6>
              </li>
              <li>
                <h6 href="#" className="hover:text-white">
                  Press
                </h6>
              </li>
              <li>
                <h6 href="#" className="hover:text-white">
                  iOS App
                </h6>
              </li>
              <li>
                <h6 href="#" className="hover:text-white">
                  Android App
                </h6>
              </li>
            </ul>
          </div>


          <div className="w-full md:w-1/2 flex justify-end">
            <ul className="flex gap-4 text-gray-400">
              <li>
                <h6 href="#" className="hover:text-white">
                  <ion-icon name="logo-facebook" class="text-xl"></ion-icon>
                </h6>
              </li>
              <li>
                <h6 href="#" className="hover:text-white">
                  <ion-icon name="logo-twitter" class="text-xl"></ion-icon>
                </h6>
              </li>
              <li>
                <h6 href="#" className="hover:text-white">
                  <ion-icon name="logo-google" class="text-xl"></ion-icon>
                </h6>
              </li>
              <li>
                <h6 href="#" className="hover:text-white">
                  <ion-icon name="logo-instagram" class="text-xl"></ion-icon>
                </h6>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-gray-400 mt-6 text-sm">
          <p>Copyright &copy; 2021 By IMDB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
