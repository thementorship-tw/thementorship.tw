export default async function TailwindDemo() {
  return (
    <div className="container py-[60px]">
      <h1 className="text-h2">Demo for Using Design Tokens</h1>

      <hr className="mb-10" />

      <section className="mb-10">
        <h2 className="text-h3 text-blue-5">Breakpoints</h2>

        <p>
          Background color will change when the screen size is changed.
          <br />
          <span className="text-blue-5">Try to change the screen size.</span>
        </p>

        <div className="w-[100px] h-[100px] bg-blue-5 md:bg-neutral-6 lg:bg-yellow-5 xl:bg-yellow-2"></div>
      </section>

      <section className="mb-10">
        <h2 className="text-h3 text-blue-6">Typography</h2>

        <ol>
          <li className="text-h1-title">H1 Title</li>
          <li className="text-h2-title">H2 Title</li>
          <li className="text-h3-title">H3 Title</li>
          <li className="text-h4-title">H4 Title</li>
          <li className="text-h1">H1</li>
          <li className="text-h2">H2</li>
          <li className="text-h3">H3</li>
          <li className="text-h4">H4</li>
          <li className="text-h5">H5</li>
          <li className="text-h6">H6</li>
          <li className="text-subtitle-lg">Subtitle-lg</li>
          <li className="text-subtitle-md">Subtitle-md</li>
          <li className="text-body-lg">Body-lg</li>
          <li className="text-body-md">Body-md</li>
          <li className="text-body-sm">Body-sm</li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="text-h3 text-blue-6">Font Size</h2>

        {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
          <li key={num} className={`text-${num.toString()}`}>
            Text-{num}
          </li>
        ))}
      </section>

      <section className="mb-10">
        <h2 className="text-h3 text-blue-6">Font Weight</h2>

        <ol>
          <li className="font-bold">font-weight-bold</li>
          <li className="font-semibold">font-weight-semibold</li>
          <li className="font-medium">font-weight-medium</li>
          <li className="font-regular">font-weight-regular</li>
          <li className="font-light">font-weight-light</li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="text-h3 text-blue-6">Line Height</h2>

        <ol>
          <li className="leading-1">line height 1</li>
          <li className="leading-2">line height 2</li>
          <li className="leading-3">line height 3</li>
          <li className="leading-4">line height 4</li>
          <li className="leading-5">line height 5</li>
          <li className="leading-6">line height 6</li>
          <li className="leading-7">line height 7</li>
          <li className="leading-8">line height 8</li>
          <li className="leading-9">line height 9</li>
          <li className="leading-10">line height 10</li>
          <li className="leading-11">line height 11</li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="text-h3 text-blue-6">Spacing</h2>

        <ol>
          <ul>
            <li>
              <p>space-1</p>
              <div className="h-5 pl-1 bg-blue-4 inline-block"></div>
            </li>
            <li>
              <p>space-2</p>
              <div className="h-5 pl-2 bg-blue-4 inline-block"></div>
            </li>
            <li>
              <p>space-3</p>
              <div className="h-5 pl-3 bg-blue-4 inline-block"></div>
            </li>
            <li>
              <p>space-4</p>
              <div className="h-5 pl-4 bg-blue-4 inline-block"></div>
            </li>
            <li>
              <p>space-5</p>
              <div className="h-5 pl-5 bg-blue-4 inline-block"></div>
            </li>
            <li>
              <p>space-6</p>
              <div className="h-5 pl-6 bg-blue-4 inline-block"></div>
            </li>
            <li>
              <p>space-7</p>
              <div className="h-5 pl-7 bg-blue-4 inline-block"></div>
            </li>
            <li>
              <p>space-8</p>
              <div className="h-5 pl-8 bg-blue-4 inline-block"></div>
            </li>
            <li>
              <p>space-9</p>
              <div className="h-5 pl-9 bg-blue-4 inline-block"></div>
            </li>
            <li>
              <p>space-10</p>
              <div className="h-5 pl-10 bg-blue-4 inline-block"></div>
            </li>
            <li>
              <p>space-11</p>
              <div className="h-5 pl-11 bg-blue-4 inline-block"></div>
            </li>
          </ul>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="text-h3 text-blue-6">Border Radius</h2>

        <ol>
          <ul>
            <li className="mb-6">
              <p>rounded-1</p>
              <div className="rounded-1 bg-yellow-3 p-11 inline-block"></div>
            </li>
            <li className="mb-6">
              <p>rounded-2</p>
              <div className="rounded-2 bg-yellow-3 p-11 inline-block"></div>
            </li>
            <li className="mb-6">
              <p>rounded-3</p>
              <div className="rounded-3 bg-yellow-3 p-11 inline-block"></div>
            </li>
            <li className="mb-6">
              <p>rounded-4</p>
              <div className="rounded-4 bg-yellow-3 p-11 inline-block"></div>
            </li>
            <li className="mb-6">
              <p>rounded-circle</p>
              <div className="rounded-circle bg-yellow-3 p-11 inline-block"></div>
            </li>
            <li className="mb-6">
              <p>rounded-pill</p>
              <div className="rounded-pill bg-yellow-3 p-11 inline-block"></div>
            </li>
          </ul>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="text-h3 text-blue-6">Box Shadow</h2>

        <ol>
          <li className="mb-6">
            <p>shadow-action</p>
            <div className="shadow-action h-8 w-[200px] border-pink-100 border-4 "></div>
          </li>
          <li className="mb-6">
            <p>shadow-fixed</p>
            <div className="shadow-fixed h-8 w-[200px] border-pink-100 border-4"></div>
          </li>
          <li className="mb-6">
            <p>shadow-raise</p>
            <div className="shadow-raise h-8 w-[200px] border-pink-100 border-4"></div>
          </li>
          <li className="mb-6">
            <p>shadow-overlay</p>
            <div className="shadow-overlay h-8 w-[200px] border-pink-100 border-4"></div>
          </li>
        </ol>
      </section>
    </div>
  );
}
