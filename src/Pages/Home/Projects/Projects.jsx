
const projects = [
  {
    id: 1,
    title: "Full-Stack Courier Website",
    image: "https://i.ibb.co.com/0RNHw5Cr/Courieer.png",
    live: "https://gofast-31477.web.app",
    client: "https://github.com/BFIbrahim/courier-website-fullstack",
    server: "https://github.com/BFIbrahim/courier-website-server-code",
    description:
      "A complete courier service platform with multi-role dashboards and secure delivery management.",
    tech: [
      "JavaScript",
      "ReactJS",
      "Node.js",
      "ExpressJS",
      "MongoDB",
      "Tailwind CSS",
      "Axios",
      "JWT",
      "TanStack Query",
      "daisyUI",
      "SweetAlert2",
      "React Hook Form",
      "Stripe",
      "SwiperJS",
      "Firebase",
    ],
    features: [
      "Login & Registration System",
      "Admin, Rider, User Dashboard",
      "Admin: Approve/Deactivate Riders, Assign Riders, Manage Roles",
      "Rider: Pickup Requests, Add/View/Track Parcel, Payment History",
      "User: Add/View/Track Parcel, Rider Request, Easy Payment",
    ],
  },

  {
    id: 2,
    title: "ZOCS LIFESTYLE (E-commerce)",
    image: "https://i.ibb.co.com/7dm3Hhpn/zocs.png",
    live: "https://gilded-marigold-e356ed.netlify.app",
    client: "https://github.com/BFIbrahim/zocswebsiteclient",
    server: "https://github.com/BFIbrahim/zocswebsiteserver",
    description:
      "A modern e-commerce platform for leather goods with complete admin control.",
    tech: [
      "JavaScript",
      "ReactJS",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Axios",
      "Firebase",
      "React Toastify"
    ],
    features: [
      "Admin Dashboard: Add, Remove, Manage Products/Orders",
      "Data Tracking & Filtering",
      "Product Search, Price & Name Filtering",
      "Add to Cart & Easy Ordering System",
    ],
  },

  {
    id: 3,
    title: "BF Toy Marketplace",
    image: "https://i.ibb.co.com/ycK6t1rj/Toy.png",
    live: "https://bf-toy-cars.web.app",
    client: "https://github.com/BFIbrahim/bf-toys-zone-client",
    server: "https://github.com/BFIbrahim/bf-toys-zone-server",
    description:
      "A toy marketplace where admins and users manage toys through a dashboard.",
    tech: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "ReactJS",
      "MongoDB",
      "Node.js",
      "Firebase",
    ],
    features: [
      "Login & Registration System",
      "Admin Can Add New Toys",
      "User Dashboard for Managing Toys",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-14 md:py-20 bg-secondary/30" id="projects">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
        Recent Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mx-4 md:mx-24">
        {projects.map((p) => (
          <div
            key={p.id}
            className="card bg-base-100 shadow-xl border border-secondary"
          >
            <figure>
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover"
              />
            </figure>

            <div className="card-body">
              <h3 className=" font-semibold text-primary">{p.title}</h3>

              <div className="flex flex-col gap-2 mt-2">
                <a
                  href={p.live}
                  target="_blank"
                  className="btn btn-primary btn-sm text-white"
                >
                  Live Site
                </a>
                <a
                  href={p.client}
                  target="_blank"
                  className="btn btn-accent btn-sm text-white"
                >
                  Client Code
                </a>
                <a
                  href={p.server}
                  target="_blank"
                  className="btn btn-accent btn-sm text-white"
                >
                  Server Code
                </a>
              </div>

              <div className="card-actions justify-end mt-4">
                <button
                  className="btn btn-outline btn-primary btn-sm hover:text-white"
                  onClick={() =>
                    document.getElementById(`modal-${p.id}`).showModal()
                  }
                >
                  View Details
                </button>
              </div>
            </div>

            <dialog id={`modal-${p.id}`} className="modal">
              <div className="modal-box max-w-2xl">
                <h3 className="text-2xl font-bold mb-3 text-primary">
                  {p.title}
                </h3>

                <p className="text-accent mb-4">{p.description}</p>

                <h4 className="font-semibold text-primary">Tech Stacks:</h4>
                <div className="flex flex-wrap gap-2 my-2">
                  {p.tech.map((t, i) => (
                    <span
                      key={i}
                      className="badge badge-outline border-primary text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h4 className="font-semibold text-primary mt-4">
                  Key Features:
                </h4>
                <ul className="list-disc list-inside text-accent space-y-1 mt-1">
                  {p.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={p.live}
                    target="_blank"
                    className="btn btn-primary btn-sm text-white"
                  >
                    Live Site
                  </a>
                  <a
                    href={p.client}
                    target="_blank"
                    className="btn btn-accent btn-sm text-white"
                  >
                    Client Code
                  </a>
                  <a
                    href={p.server}
                    target="_blank"
                    className="btn btn-accent btn-sm text-white"
                  >
                    Server Code
                  </a>
                </div>

                <form method="dialog">
                  <button className="btn btn-sm mt-5">Close</button>
                </form>
              </div>
            </dialog>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection