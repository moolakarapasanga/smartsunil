import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";
{ /* import BirthdayMusic from "@/components/BirthdayMusic"; */}

export default async function ResearchPage() {
  const cookieStore = await cookies();
  const role = cookieStore.get("user_role")?.value;

  if (role !== process.env.RESEARCHER_USERNAME) {
    redirect("/sign-in");
  }

  return (
    <main className="birthday-page">
      { /* <BirthdayMusic /> */ }

      {/* =====================================================
          FALLING PARTY CONFETTI
          ===================================================== */}

      <div className="confetti-container" aria-hidden="true">
        <span className="confetti c1" />
        <span className="confetti c2" />
        <span className="confetti c3" />
        <span className="confetti c4" />
        <span className="confetti c5" />
        <span className="confetti c6" />
        <span className="confetti c7" />
        <span className="confetti c8" />
        <span className="confetti c9" />
        <span className="confetti c10" />
        <span className="confetti c11" />
        <span className="confetti c12" />
        <span className="confetti c13" />
        <span className="confetti c14" />
        <span className="confetti c15" />
        <span className="confetti c16" />
        <span className="confetti c17" />
        <span className="confetti c18" />
        <span className="confetti c19" />
        <span className="confetti c20" />
        <span className="confetti c21" />
        <span className="confetti c22" />
        <span className="confetti c23" />
        <span className="confetti c24" />
        <span className="confetti c25" />
        <span className="confetti c26" />
        <span className="confetti c27" />
        <span className="confetti c28" />
        <span className="confetti c29" />
        <span className="confetti c30" />
      </div>

      {/* =====================================================
          BALLOONS
          ===================================================== */}

      <div className="balloon balloon-pink balloon-one" aria-hidden="true">
        <div className="balloon-string" />
      </div>

      <div className="balloon balloon-purple balloon-two" aria-hidden="true">
        <div className="balloon-string" />
      </div>

      <div className="balloon balloon-peach balloon-three" aria-hidden="true">
        <div className="balloon-string" />
      </div>

      <div className="balloon balloon-blue balloon-four" aria-hidden="true">
        <div className="balloon-string" />
      </div>

      <div className="balloon balloon-pink balloon-five" aria-hidden="true">
        <div className="balloon-string" />
      </div>

      <div className="balloon balloon-yellow balloon-six" aria-hidden="true">
        <div className="balloon-string" />
      </div>

      {/* =====================================================
          SPARKLES
          ===================================================== */}

      <div className="sparkle sparkle-one" aria-hidden="true">
        ✦
      </div>

      <div className="sparkle sparkle-two" aria-hidden="true">
        ✨
      </div>

      <div className="sparkle sparkle-three" aria-hidden="true">
        ✦
      </div>

      <div className="sparkle sparkle-four" aria-hidden="true">
        ✨
      </div>

      {/* =====================================================
          MAIN BIRTHDAY CONTENT
          ===================================================== */}

      <div className="birthday-content">

        <div className="small-wish">
          ✨ A little birthday surprise ✨
        </div>

        <div className="birthday-emoji">
          🎂
        </div>

        <h1>
          Happy Birthday
        </h1>

        <div className="birthday-subtitle">
          Rithicka 💗
        </div>

        <div className="heart-divider">
          ♡ &nbsp; ✦ &nbsp; ♡
        </div>

        <p className="birthday-message">
          Wishing you a beautiful birthday filled with
          happiness, laughter, wonderful moments,
          and everything that makes you smile.
        </p>

        <p className="birthday-message second">
          May the year ahead bring you many beautiful
          memories and plenty of reasons to be happy. 💕
        </p>

        <div className="birthday-signature">
          With warm wishes ❤️
        </div>

      </div>

      {/* =====================================================
          LOGOUT
          ===================================================== */}

             {/* =====================================================
          NEXT BIRTHDAY COUNTDOWN
          ===================================================== */}

      <section className="next-birthday-countdown">
        <div className="countdown-card">

          <div className="countdown-icon">
            🎂
          </div>

          <div className="countdown-label">
            NEXT BIRTHDAY
          </div>

          <h2>
            The Countdown Begins 💗
          </h2>

          <div
            id="birthday-countdown"
            className="countdown-grid"
          >
            <div className="countdown-item">
              <span id="birthday-months">00</span>
              <small>Months</small>
            </div>

            <div className="countdown-item">
              <span id="birthday-days">00</span>
              <small>Days</small>
            </div>

            <div className="countdown-item">
              <span id="birthday-hours">00</span>
              <small>Hours</small>
            </div>

            <div className="countdown-item">
              <span id="birthday-minutes">00</span>
              <small>Minutes</small>
            </div>

            <div className="countdown-item">
              <span id="birthday-seconds">00</span>
              <small>Seconds</small>
            </div>
          </div>

          <p>
            🎈 Every second brings the next celebration closer 💕
          </p>

        </div>
      </section>

      <script
  dangerouslySetInnerHTML={{
    __html: `
      window.addEventListener("load", function () {

        const birthdayMonth = 7;
        const birthdayDay = 23;

        function getNextBirthday() {
          const now = new Date();

          let year = now.getFullYear();

          let birthday = new Date(
            year,
            birthdayMonth,
            birthdayDay,
            0,
            0,
            0
          );

          if (birthday <= now) {
            birthday = new Date(
              year + 1,
              birthdayMonth,
              birthdayDay,
              0,
              0,
              0
            );
          }

          return birthday;
        }

        const target = getNextBirthday();

        function updateCountdown() {

          const now = new Date();

          let cursor = new Date(now);

          let months = 0;

          while (true) {

            const nextMonth =
              new Date(cursor);

            nextMonth.setMonth(
              nextMonth.getMonth() + 1
            );

            if (nextMonth > target) {
              break;
            }

            cursor = nextMonth;

            months++;
          }

          let remaining =
            target.getTime() -
            cursor.getTime();

          const dayMs =
            1000 * 60 * 60 * 24;

          const hourMs =
            1000 * 60 * 60;

          const minuteMs =
            1000 * 60;

          const days =
            Math.floor(
              remaining / dayMs
            );

          remaining %= dayMs;

          const hours =
            Math.floor(
              remaining / hourMs
            );

          remaining %= hourMs;

          const minutes =
            Math.floor(
              remaining / minuteMs
            );

          remaining %= minuteMs;

          const seconds =
            Math.floor(
              remaining / 1000
            );

          const values = {
            months,
            days,
            hours,
            minutes,
            seconds
          };

          Object.entries(values).forEach(
            ([key, value]) => {

              const element =
                document.getElementById(
                  "birthday-" + key
                );

              if (element) {
                element.textContent =
                  String(value).padStart(
                    2,
                    "0"
                  );
              }

            }
          );
        }

        /*
         * Wait until React hydration has
         * completed before changing the DOM.
         */
        setTimeout(() => {

          updateCountdown();

          window.setInterval(
            updateCountdown,
            1000
          );

        }, 100);

      });
    `,
  }}
/>  

      <div className="logout-wrapper">
        <LogoutButton />
      </div>

      {/* =====================================================
          PAGE-LOCAL CSS
          ===================================================== */}

      <style>{`

        /* ---------------------------------------------------
           PAGE
           --------------------------------------------------- */

        .birthday-page {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;

          display: flex;
          align-items: center;
          justify-content: center;

          background:
            radial-gradient(
              circle at 50% 35%,
              rgba(255, 255, 255, 0.9),
              transparent 35%
            ),
            radial-gradient(
              circle at 15% 20%,
              rgba(255, 182, 210, 0.8),
              transparent 30%
            ),
            radial-gradient(
              circle at 85% 75%,
              rgba(220, 190, 255, 0.55),
              transparent 32%
            ),
            linear-gradient(
              135deg,
              #ffd9e8 0%,
              #ffeaf2 35%,
              #fff3f7 65%,
              #f8e6ff 100%
            );

          color: #6b3150;
        }


        /* ---------------------------------------------------
           SOFT GLOW
           --------------------------------------------------- */

        .birthday-page::before {
          content: "";
          position: absolute;
          width: 700px;
          height: 700px;

          left: 50%;
          top: 50%;

          transform: translate(-50%, -50%);

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(255, 255, 255, 0.8),
              rgba(255, 255, 255, 0)
            );

          pointer-events: none;
        }


        /* ---------------------------------------------------
           MAIN CONTENT
           --------------------------------------------------- */

        .birthday-content {
          position: relative;
          z-index: 10;

          width: min(90%, 760px);

          padding: 60px 35px;

          text-align: center;

          border-radius: 36px;

          background:
            rgba(255, 255, 255, 0.55);

          border:
            1px solid rgba(255, 255, 255, 0.8);

          box-shadow:
            0 30px 80px rgba(174, 87, 125, 0.16),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);

          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);

          animation: cardAppear 1.2s ease-out both;
        }


        @keyframes cardAppear {
          from {
            opacity: 0;
            transform: translateY(25px) scale(0.97);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }


        /* ---------------------------------------------------
           SMALL HEADER
           --------------------------------------------------- */

        .small-wish {
          margin-bottom: 18px;

          color: #c15d88;

          font-size: 13px;
          font-weight: 600;

          letter-spacing: 0.14em;
          text-transform: uppercase;
        }


        /* ---------------------------------------------------
           CAKE
           --------------------------------------------------- */

        .birthday-emoji {
          font-size: 55px;

          margin-bottom: 10px;

          animation:
            cakeBounce 2.5s ease-in-out infinite;
        }


        @keyframes cakeBounce {
          0%,
          100% {
            transform: translateY(0) rotate(-2deg);
          }

          50% {
            transform: translateY(-8px) rotate(2deg);
          }
        }


        /* ---------------------------------------------------
           HEADING
           --------------------------------------------------- */

        .birthday-content h1 {
          margin: 0;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: clamp(48px, 9vw, 92px);

          line-height: 0.95;

          font-weight: 700;

          letter-spacing: -0.04em;

          background:
            linear-gradient(
              135deg,
              #d44d80,
              #e879a3,
              #b66de2,
              #d44d80
            );

          background-size: 250% 250%;

          -webkit-background-clip: text;
          background-clip: text;

          color: transparent;

          animation:
            titleGradient 6s ease infinite,
            titleAppear 1.4s ease-out both;
        }


        @keyframes titleGradient {
          0% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }

          100% {
            background-position: 0% 50%;
          }
        }


        @keyframes titleAppear {
          from {
            opacity: 0;
            transform: scale(0.9);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }


        /* ---------------------------------------------------
           SUBTITLE
           --------------------------------------------------- */

        .birthday-subtitle {
          margin-top: 10px;

          color: #a74f78;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: clamp(30px, 5vw, 46px);

          font-style: italic;

          animation:
            subtitleAppear 1.8s ease-out both;
        }


        @keyframes subtitleAppear {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }


        /* ---------------------------------------------------
           DIVIDER
           --------------------------------------------------- */

        .heart-divider {
          margin: 25px 0;

          color: #e27ba5;

          font-size: 18px;

          letter-spacing: 0.25em;
        }


        /* ---------------------------------------------------
           MESSAGE
           --------------------------------------------------- */

        .birthday-message {
          max-width: 590px;

          margin: 0 auto;

          color: #75475b;

          font-size: 17px;

          line-height: 1.9;

          animation:
            messageAppear 2s ease-out both;
        }

        .birthday-message.second {
          margin-top: 15px;

          animation-delay: 0.3s;
        }


        @keyframes messageAppear {
          from {
            opacity: 0;
            transform: translateY(15px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }


        /* ---------------------------------------------------
           SIGNATURE
           --------------------------------------------------- */

        .birthday-signature {
          margin-top: 30px;

          color: #bd5d88;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 19px;

          font-style: italic;
        }


        /* ---------------------------------------------------
           BALLOONS
           --------------------------------------------------- */

        .balloon {
          position: absolute;

          z-index: 4;

          width: 74px;
          height: 92px;

          border-radius:
            50%
            50%
            48%
            48%;

          box-shadow:
            inset -12px -14px 20px rgba(0, 0, 0, 0.08),
            inset 12px 10px 20px rgba(255, 255, 255, 0.25),
            0 12px 30px rgba(174, 87, 125, 0.15);

          animation:
            balloonFloat 5s ease-in-out infinite;
        }


        .balloon::after {
          content: "";

          position: absolute;

          left: 50%;
          bottom: -7px;

          transform: translateX(-50%);

          width: 0;
          height: 0;

          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 10px solid currentColor;
        }


        .balloon-string {
          position: absolute;

          left: 50%;
          top: 100%;

          width: 1px;
          height: 170px;

          background:
            rgba(119, 76, 99, 0.35);

          transform-origin: top;

          animation:
            stringMove 4s ease-in-out infinite;
        }


        .balloon-pink {
          background:
            radial-gradient(
              circle at 30% 25%,
              #fff0f6,
              #f98fb9 30%,
              #e85b92 75%,
              #cf3f79
            );

          color: #cf3f79;
        }


        .balloon-purple {
          background:
            radial-gradient(
              circle at 30% 25%,
              #f8efff,
              #c79bea 30%,
              #a56bd3 75%,
              #8c52c4
            );

          color: #8c52c4;
        }


        .balloon-peach {
          background:
            radial-gradient(
              circle at 30% 25%,
              #fff6ec,
              #ffbd8a 30%,
              #f39461 75%,
              #e8784c
            );

          color: #e8784c;
        }


        .balloon-blue {
          background:
            radial-gradient(
              circle at 30% 25%,
              #effcff,
              #9de7f0 30%,
              #63cbd9 75%,
              #3eafc0
            );

          color: #3eafc0;
        }


        .balloon-yellow {
          background:
            radial-gradient(
              circle at 30% 25%,
              #fffdea,
              #ffe58c 30%,
              #f5c94f 75%,
              #e2ad2d
            );

          color: #e2ad2d;
        }


        .balloon-one {
          left: 5%;
          top: 17%;

          animation-delay: 0s;
        }


        .balloon-two {
          left: 14%;
          bottom: 5%;

          transform: scale(0.85);

          animation-delay: 1.2s;
        }


        .balloon-three {
          right: 8%;
          top: 14%;

          transform: scale(0.9);

          animation-delay: 0.7s;
        }


        .balloon-four {
          right: 16%;
          bottom: 8%;

          transform: scale(0.78);

          animation-delay: 1.8s;
        }


        .balloon-five {
          left: 27%;
          top: 5%;

          transform: scale(0.62);

          animation-delay: 2s;
        }


        .balloon-six {
          right: 28%;
          top: 7%;

          transform: scale(0.65);

          animation-delay: 2.7s;
        }


        @keyframes balloonFloat {
          0%,
          100% {
            margin-top: 0;
            transform: translateY(0) rotate(-3deg);
          }

          50% {
            margin-top: -18px;
            transform: translateY(-8px) rotate(4deg);
          }
        }


        @keyframes stringMove {
          0%,
          100% {
            transform: rotate(2deg);
          }

          50% {
            transform: rotate(-3deg);
          }
        }


        /* ---------------------------------------------------
           CONFETTI
           --------------------------------------------------- */

        .confetti-container {
          position: absolute;

          inset: 0;

          z-index: 8;

          overflow: hidden;

          pointer-events: none;
        }


        .confetti {
          position: absolute;

          top: -30px;

          width: 9px;
          height: 15px;

          border-radius: 2px;

          animation:
            confettiFall linear infinite;
        }


        .confetti:nth-child(3n) {
          border-radius: 50%;
        }


        .c1 {
          left: 3%;
          background: #f45d9a;
          animation-duration: 4.2s;
          animation-delay: 0s;
        }

        .c2 {
          left: 8%;
          background: #8f6de0;
          animation-duration: 5.3s;
          animation-delay: 0.8s;
        }

        .c3 {
          left: 13%;
          background: #ffd45c;
          animation-duration: 4.8s;
          animation-delay: 1.4s;
        }

        .c4 {
          left: 18%;
          background: #61cbd8;
          animation-duration: 5.8s;
          animation-delay: 0.2s;
        }

        .c5 {
          left: 23%;
          background: #ef7ca9;
          animation-duration: 4.5s;
          animation-delay: 1.9s;
        }

        .c6 {
          left: 28%;
          background: #b879df;
          animation-duration: 6s;
          animation-delay: 0.4s;
        }

        .c7 {
          left: 33%;
          background: #ffbd71;
          animation-duration: 4.9s;
          animation-delay: 2.2s;
        }

        .c8 {
          left: 38%;
          background: #f45d9a;
          animation-duration: 5.5s;
          animation-delay: 0.7s;
        }

        .c9 {
          left: 43%;
          background: #62cbd7;
          animation-duration: 4.7s;
          animation-delay: 1.5s;
        }

        .c10 {
          left: 48%;
          background: #a779df;
          animation-duration: 5.9s;
          animation-delay: 0.1s;
        }

        .c11 {
          left: 53%;
          background: #ffd45c;
          animation-duration: 4.4s;
          animation-delay: 2s;
        }

        .c12 {
          left: 58%;
          background: #ef719e;
          animation-duration: 5.2s;
          animation-delay: 0.5s;
        }

        .c13 {
          left: 63%;
          background: #61cbd8;
          animation-duration: 6.1s;
          animation-delay: 1.7s;
        }

        .c14 {
          left: 68%;
          background: #b879df;
          animation-duration: 4.6s;
          animation-delay: 0.3s;
        }

        .c15 {
          left: 73%;
          background: #ffbe6f;
          animation-duration: 5.7s;
          animation-delay: 1.1s;
        }

        .c16 {
          left: 78%;
          background: #f45d9a;
          animation-duration: 4.8s;
          animation-delay: 2.3s;
        }

        .c17 {
          left: 83%;
          background: #63cbd9;
          animation-duration: 5.4s;
          animation-delay: 0.6s;
        }

        .c18 {
          left: 88%;
          background: #9f70dc;
          animation-duration: 6.2s;
          animation-delay: 1.3s;
        }

        .c19 {
          left: 93%;
          background: #ffd45c;
          animation-duration: 4.5s;
          animation-delay: 0.9s;
        }

        .c20 {
          left: 97%;
          background: #ef719e;
          animation-duration: 5.6s;
          animation-delay: 2.1s;
        }

        .c21 {
          left: 6%;
          background: #ffd45c;
          animation-duration: 6.5s;
          animation-delay: 3s;
        }

        .c22 {
          left: 20%;
          background: #61cbd8;
          animation-duration: 5.1s;
          animation-delay: 3.2s;
        }

        .c23 {
          left: 35%;
          background: #ef719e;
          animation-duration: 6.3s;
          animation-delay: 2.7s;
        }

        .c24 {
          left: 50%;
          background: #a779df;
          animation-duration: 5.4s;
          animation-delay: 3.5s;
        }

        .c25 {
          left: 65%;
          background: #ffbe6f;
          animation-duration: 6.4s;
          animation-delay: 2.8s;
        }

        .c26 {
          left: 76%;
          background: #61cbd8;
          animation-duration: 5.3s;
          animation-delay: 3.7s;
        }

        .c27 {
          left: 86%;
          background: #f45d9a;
          animation-duration: 6.1s;
          animation-delay: 2.5s;
        }

        .c28 {
          left: 91%;
          background: #ffd45c;
          animation-duration: 5.8s;
          animation-delay: 3.1s;
        }

        .c29 {
          left: 44%;
          background: #ef719e;
          animation-duration: 6.6s;
          animation-delay: 4s;
        }

        .c30 {
          left: 57%;
          background: #8f6de0;
          animation-duration: 5.9s;
          animation-delay: 3.4s;
        }


        @keyframes confettiFall {
          0% {
            transform:
              translateY(-40px)
              rotate(0deg)
              translateX(0);

            opacity: 0;
          }

          8% {
            opacity: 1;
          }

          25% {
            transform:
              translateY(25vh)
              rotate(140deg)
              translateX(25px);
          }

          50% {
            transform:
              translateY(50vh)
              rotate(280deg)
              translateX(-25px);
          }

          75% {
            transform:
              translateY(75vh)
              rotate(430deg)
              translateX(25px);
          }

          100% {
            transform:
              translateY(110vh)
              rotate(600deg)
              translateX(-15px);

            opacity: 0;
          }
        }


        /* ---------------------------------------------------
           SPARKLES
           --------------------------------------------------- */

        .sparkle {
          position: absolute;

          z-index: 6;

          color: #ffffff;

          text-shadow:
            0 0 12px rgba(255, 255, 255, 0.9),
            0 0 25px rgba(255, 122, 174, 0.6);

          animation:
            sparkleAnimation 2.5s ease-in-out infinite;
        }


        .sparkle-one {
          top: 24%;
          left: 23%;
          font-size: 22px;
          animation-delay: 0.2s;
        }


        .sparkle-two {
          top: 28%;
          right: 23%;
          font-size: 25px;
          animation-delay: 0.8s;
        }


        .sparkle-three {
          bottom: 25%;
          left: 20%;
          font-size: 17px;
          animation-delay: 1.4s;
        }


        .sparkle-four {
          bottom: 22%;
          right: 20%;
          font-size: 21px;
          animation-delay: 1.9s;
        }


        @keyframes sparkleAnimation {
          0%,
          100% {
            opacity: 0.25;
            transform: scale(0.7) rotate(0deg);
          }

          50% {
            opacity: 1;
            transform: scale(1.25) rotate(20deg);
          }
        }


        /* ---------------------------------------------------
           LOGOUT
           --------------------------------------------------- */

        .logout-wrapper {
          position: absolute;

          z-index: 30;

          top: 22px;
          right: 24px;
        }


        /* ---------------------------------------------------
           MOBILE
           --------------------------------------------------- */

        @media (max-width: 640px) {

          .birthday-content {
            padding: 45px 22px;
            border-radius: 26px;
          }

          .birthday-emoji {
            font-size: 45px;
          }

          .birthday-message {
            font-size: 15px;
            line-height: 1.8;
          }

          .balloon {
            width: 48px;
            height: 62px;
          }

          .balloon-string {
            height: 100px;
          }

          .balloon-five,
          .balloon-six {
            display: none;
          }

          .sparkle-one {
            left: 8%;
          }

          .sparkle-two {
            right: 8%;
          }

          .sparkle-three {
            left: 8%;
          }

          .sparkle-four {
            right: 8%;
          }

          .logout-wrapper {
            top: 16px;
            right: 16px;
          }
        }


        /* ---------------------------------------------------
           REDUCED MOTION
           --------------------------------------------------- */

        @media (prefers-reduced-motion: reduce) {

          .birthday-page *,
          .birthday-page::before {
            animation: none !important;
          }

        }

        /* ---------------------------------------------------
   NEXT BIRTHDAY COUNTDOWN
   --------------------------------------------------- */

.next-birthday-countdown {
  position: relative;
  z-index: 12;

  width: min(90%, 850px);

  margin: 40px auto 90px;

  padding: 0 20px;
}


.countdown-card {
  padding: 35px 25px;

  text-align: center;

  border-radius: 30px;

  background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.82),
      rgba(255, 232, 244, 0.88)
    );

  border:
    1px solid rgba(255, 255, 255, 0.9);

  box-shadow:
    0 20px 55px rgba(174, 87, 125, 0.13);

  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}


.countdown-icon {
  font-size: 40px;

  margin-bottom: 5px;
}


.countdown-label {
  color: #c15d88;

  font-size: 11px;

  font-weight: 700;

  letter-spacing: 0.25em;

  text-transform: uppercase;
}


.countdown-card h2 {
  margin-top: 8px;

  color: #a74f78;

  font-family:
    Georgia,
    "Times New Roman",
    serif;

  font-size:
    clamp(24px, 4vw, 34px);

  font-weight: 700;
}


.countdown-grid {
  display: grid;

  grid-template-columns:
    repeat(5, 1fr);

  gap: 12px;

  margin-top: 25px;
}


.countdown-item {
  padding: 18px 8px;

  border-radius: 18px;

  background:
    rgba(255, 255, 255, 0.72);

  border:
    1px solid rgba(249, 168, 212, 0.45);

  box-shadow:
    0 8px 20px
    rgba(174, 87, 125, 0.07);
}


.countdown-item span {
  display: block;

  color: #d44d80;

  font-size:
    clamp(25px, 5vw, 40px);

  font-weight: 800;

  line-height: 1;
}


.countdown-item small {
  display: block;

  margin-top: 8px;

  color: #bd5d88;

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 0.12em;

  text-transform: uppercase;
}


.countdown-card p {
  margin-top: 22px;

  color: #c15d88;

  font-size: 13px;
}


@media (max-width: 640px) {

  .next-birthday-countdown {
    width: 100%;

    margin-top: 25px;

    padding: 0 14px;
  }


  .countdown-card {
    padding: 28px 14px;

    border-radius: 24px;
  }


  .countdown-grid {
    grid-template-columns:
      repeat(2, 1fr);

    gap: 9px;
  }


  .countdown-item:last-child {
    grid-column: 1 / -1;

    width: 50%;

    margin: 0 auto;
  }

}  

      `}</style>
    </main>
  );
}