/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tailwind의 class이름이 포함된 파일에 대한 경로를 구성하는 부분을 추가합니다.
  // src경로 내부에 자바스크립트, 타입스크립트, jsx를 리턴하는 파일들을 모두 작성 해줍니다.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: {
          0: "#f3fffb",
          1: "#c3fae8",
          2: "#96f2d7",
          3: "#63e6be",
          4: "#38d9a9",
          5: "#20c997",
          6: "#12b886",
          7: "#0ca678",
          8: "#099268",
          9: "#087f5b",
        },
        gray: {
          0: "#f8f9fa",
          1: "#f1f3f5",
          2: "#e9ecef",
          3: "#dee2e6",
          4: "#ced4da",
          5: "#adb5bd",
          6: "#868e96",
          7: "#495057",
          8: "#343a40",
          9: "#212529",
        },
        red: {
          0: "#fff5f5",
          1: "#ffe3e3",
          2: "#ffc9c9",
          3: "#ffa8a8",
          4: "#ff8787",
          5: "#ff6b6b",
          6: "#fa5252",
          7: "#f03e3e",
          8: "#e03131",
          9: "#c92a2a",
        },
        primary: {
          1: "#12b886",
          2: "#20c997",
        },
        accent: {
          1: "#121212",
          2: "#4a4a4a",
          3: "#898989",
          4: "silver",
        },
        destructive: {
          1: "#ff6b6b",
          2: "#ff8787",
        },
        border: {
          1: "#343a40",
          2: "#adb5bd",
          3: "#dee2e6",
          4: "#f1f3f5",
        },
        text: {
          1: "#212529",
          2: "#495057",
          3: "#868e96",
          4: "#ced4da",
        },
        bg: {
          page: {
            1: "#f8f9fa",
            2: "#fff",
          },
          element: {
            1: "#fff",
            2: "#f8f9fa",
            3: "#e9ecef",
            4: "#dee2e6",
            5: "#212529",
            6: "#343a40",
            7: "#fafafa",
            8: "#fbfdfc",
          },
          invert: "#1e1e1e",
          tag: "#f8f9fa",
        },
        background: {
          1: "#fff",
          2: "#f5f5f5",
          3: "#ebebeb",
          4: "#e0e0e0",
          invert: "#212121",
          altbase: "#f5f5f5",
        },
      },
    },
  },
  plugins: [],
};
