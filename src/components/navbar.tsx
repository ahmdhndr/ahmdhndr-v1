import Image from "next/image";

import dayjs from "dayjs";

import { navIcons, navLinks } from "@/constants";

const Navbar = () => {
  return (
    <nav>
      {/* Left section */}
      <div>
        <Image src="/images/logo.svg" width={20} height={20} alt="logo" />
        <p className="font-bold">Achmad Hendarsyah</p>

        <ul>
          {navLinks.map(({ id, name }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Right section */}
      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <Image
                src={img}
                width={20}
                height={20}
                alt={`icon-${id}`}
                className="icon-hover"
              />
            </li>
          ))}
        </ul>

        <time>{dayjs().format("ddd MMM D HH:mm")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
