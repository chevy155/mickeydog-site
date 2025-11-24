import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-6 space-y-16">
      {/* HERO */}
      <section className="w-full max-w-4xl text-center">
        <Image
          src="/mickey-hero.jpg"
          width={800}
          height={800}
          alt="Mickey the Frenchie"
          className="rounded-3xl shadow-2xl mx-auto"
        />
        <h1 className="text-5xl font-bold mt-6">Mickey the Frenchie 🐾</h1>
        <p className="text-xl mt-2 text-gray-400">Redwood City’s Littlest Explorer</p>
      </section>

      {/* BIO */}
      <section className="max-w-3xl text-center space-y-4">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Hi, I'm Mickey! I'm a 3-year-old Frenchie living in Redwood City.
          I love hanging out with my family — <b>Nacho, Maru, Julian, and Marco</b> —
          running full speed at the park, visiting friends, and exploring
          the neighborhood. If I'm not playing, I'm supervising. If I'm
          not supervising, I'm napping. Either way... I run this house.
        </p>
      </section>

      {/* TREATS */}
      <section className="max-w-2xl text-center space-y-3">
        <h2 className="text-3xl font-bold">Favorite Treats</h2>
        <ul className="text-lg text-gray-300 space-y-1">
          <li>🦴 Sweet Potato Chews</li>
          <li>🍌 Frozen Banana Bites</li>
          <li>🥕 Carrots</li>
          <li>🐂 Bully Sticks</li>
          <li>🥜 Peanut Butter Treats</li>
          <li>👀 “Anything Dad Drops on Accident”</li>
        </ul>
      </section>

      {/* GALLERY */}
      <section className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Image src="/gallery/mickey-1.jpg" width={400} height={400} alt="" className="rounded-xl" />
          <Image src="/gallery/mickey-2.jpg" width={400} height={400} alt="" className="rounded-xl" />
          <Image src="/gallery/mickey-3.jpg" width={400} height={400} alt="" className="rounded-xl" />
        </div>
      </section>

      {/* GUESTBOOK */}
      <section className="max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-2">Guestbook</h2>
        <p className="text-gray-400">Guestbook coming soon! 🐾</p>
      </section>
    </main>
  );
}
