const Footer = () => {

  return (
    <article>
      <p>Copyright © 2022 Water Street Works</p>
      <p>
        <small>Environment: {import.meta.env.MODE}</small><br />
        <small>Version: {import.meta.env.VITE_VERSION}</small>
      </p>
    </article>
  )
}

export default Footer;
