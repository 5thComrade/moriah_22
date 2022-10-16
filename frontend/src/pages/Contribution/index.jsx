const Contribution = () => {
  return (
    <section className="container mx-auto p-4">
      <div className="flex space-x-2 items-center">
        <div className="bg-neutral-50 w-8 h-1"></div>
        <div className="text-3xl 3xl:text-4xl">Contribute</div>
      </div>
      <div className="text-base mt-4 text-neutral-50 3xl:text-xl">
        Your presence is all we look forward to. You can also be part of a
        breakthrough, and make a contribution that will help us draw more people
        to the Land of Moriah.
      </div>

      <div className="text-base mt-4 text-neutral-50 3xl:text-xl">
        <span className="text-lg 3xl:text-3xl">UPI Details</span>
        <br />
        Name - Abilash P M
        <br />
        UPI Handle - 9731895495@paytm
        <br />
        <a
          href="https://p.paytm.me/xCTH/ukexawvx"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Pay on Paytm
        </a>
      </div>

      <div className="flex justify-center mt-6">
        <img
          src="https://cdn.jsdelivr.net/gh/5thComrade/moriah_meet/moriah_contribution.jpeg"
          alt="Moriah Contribution UPI QR Code"
          loading="lazy"
          className="px-8"
        />
      </div>
    </section>
  );
};

export default Contribution;
