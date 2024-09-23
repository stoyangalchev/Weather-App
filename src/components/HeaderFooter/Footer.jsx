
export default function Footer() {
  return (
    <div className=" min-h-[10vh] bg-gradient-to-b from-green-500 to-green-300 dark:from-lime-600 dark:to-green-900 grid p-6 text-white dark:text-blue grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-3 place-items-center items-center">
      <a
        className="font-bold"
        target="_blank"
        href="https://www.linkedin.com/in/stoyan-galchev-21612a274/"
        rel="noreferrer"
      >

        LinkedIn
      </a>
      <div className="grid place-items-center">
        <p>
          Made with ❤️ &nbsp;by{" "}
          <a
            target="_blank"
            href="https://stoyan-galchev.onrender.com/"
            rel="noreferrer"
          >
            Stoyan Galchev
          </a>
        </p>
      </div>
      <a
        className="font-bold"
        target="_blank"
        href="https://github.com/StoyanGalchev"
        rel="noreferrer"
      >
        Github
      </a>

    </div>
  );
}
