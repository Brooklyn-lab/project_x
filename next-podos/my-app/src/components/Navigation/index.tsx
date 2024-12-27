import "./Navigation.module.scss"

const menuLinks = [
  {
    id: 1,
    title: "O mnie",
    href: "",
  },
  {
    id: 2,
    title: "Dlaczego warto wybrać?",
    href: "",
  },
  {
    id: 3,
    title: "Usługi i ceny",
    href: "",
  },
  {
    id: 4,
    title: "address",
    href: "",
  },
  {
    id: 5,
    title: "Moje prace",
    href: "",
  },
  {
    id: 6,
    title: "Kontakt",
    href: "",
  },
]

export default function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {menuLinks.map((item) => (
          <li className="nav__item" key={item.id}>
            <a className="nav__link" href={item.href}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
