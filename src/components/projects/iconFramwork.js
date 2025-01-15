export default function IconFramework({ project }) {
  return (
    <>
      {project.framework === "react" && (
        <div className="absolute top-3 right-3 z-10 bg-[#86E1F9] rounded-sm p-1 ">
          <svg
            width="19"
            height="17"
            viewBox="0 0 19 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.65225 9.97326C9.31341 9.97326 8.98844 9.83866 8.74885 9.59906C8.50925 9.35946 8.37464 9.0345 8.37464 8.69565C8.37464 8.35681 8.50925 8.03184 8.74885 7.79225C8.98844 7.55265 9.31341 7.41804 9.65225 7.41804C9.9911 7.41804 10.3161 7.55265 10.5557 7.79225C10.7953 8.03184 10.9299 8.35681 10.9299 8.69565C10.9299 9.0345 10.7953 9.35946 10.5557 9.59906C10.3161 9.83866 9.9911 9.97326 9.65225 9.97326ZM9.20253 12.5234C9.35159 12.7022 9.5015 12.876 9.65225 13.0421C9.80301 12.876 9.95292 12.7031 10.102 12.5234C9.80219 12.5297 9.50231 12.5297 9.20253 12.5234ZM7.50331 12.4169C6.84923 12.3488 6.19947 12.2442 5.55709 12.1035C5.49321 12.4016 5.44466 12.6912 5.41229 12.9688C5.25046 14.3171 5.47617 15.1365 5.81942 15.3341C6.16267 15.5326 6.9846 15.3179 8.07228 14.5045C8.29628 14.3367 8.52199 14.1502 8.74856 13.9466C8.30523 13.4604 7.88949 12.9497 7.50331 12.4169ZM13.7474 12.1035C13.1367 12.2397 12.4843 12.3454 11.8012 12.4169C11.415 12.9497 10.9993 13.4604 10.5559 13.9466C10.7825 14.151 11.0082 14.3367 11.2322 14.5045C12.3199 15.3179 13.1418 15.5326 13.4851 15.3341C13.8283 15.1365 14.0532 14.3171 13.8931 12.9688C13.8579 12.6783 13.8096 12.3896 13.7483 12.1035H13.7474ZM14.9824 11.7738C15.4739 14.0216 15.2158 15.8111 14.1239 16.4414C13.032 17.0717 11.3532 16.4005 9.65225 14.8512C7.95133 16.4005 6.27255 17.0708 5.18062 16.4405C4.08869 15.8102 3.83061 14.0216 4.32121 11.773C2.12883 11.0754 0.708984 9.95623 0.708984 8.69565C0.708984 7.43508 2.12883 6.31674 4.32121 5.61746C3.83061 3.36972 4.08869 1.58022 5.18062 0.949929C6.27255 0.319641 7.95133 0.990812 9.65225 2.54013C11.3532 0.990812 13.032 0.320493 14.1239 0.950781C15.2158 1.58107 15.4739 3.36972 14.9833 5.61832C17.1757 6.31589 18.5955 7.43508 18.5955 8.69565C18.5955 9.95623 17.1757 11.0746 14.9833 11.7738H14.9824ZM8.74771 3.44468C8.5311 3.24861 8.30573 3.06246 8.07228 2.88679C6.9846 2.07337 6.16267 1.85874 5.81942 2.05719C5.47617 2.25479 5.25131 3.07417 5.41144 4.42247C5.44551 4.70099 5.49321 4.98973 5.55624 5.28784C6.1989 5.14708 6.84894 5.04243 7.50331 4.9744C7.90789 4.41821 8.32524 3.90632 8.74856 3.44468H8.74771ZM11.8012 4.9744C12.4843 5.04595 13.1367 5.15241 13.7474 5.28784C13.8113 4.98973 13.8598 4.70014 13.8922 4.42247C14.054 3.07417 13.8283 2.25479 13.4851 2.05719C13.1418 1.85874 12.3199 2.07337 11.2322 2.88679C10.9985 3.06244 10.7728 3.24859 10.5559 3.44468C10.9793 3.90632 11.3966 4.41821 11.8012 4.9744ZM10.102 4.86793C9.95292 4.68907 9.80301 4.51531 9.65225 4.34922C9.5015 4.51531 9.35159 4.68822 9.20253 4.86793C9.50231 4.86157 9.80219 4.86157 10.102 4.86793ZM6.56214 10.9988C6.40675 10.7425 6.25681 10.4829 6.11242 10.2203C6.03151 10.4392 5.95655 10.6547 5.88841 10.8684C6.10731 10.9161 6.33217 10.9596 6.56129 10.9988H6.56214ZM8.2077 11.1981C9.16941 11.2695 10.1351 11.2695 11.0968 11.1981C11.6395 10.4008 12.1224 9.56436 12.5414 8.69565C12.1224 7.82694 11.6395 6.99051 11.0968 6.19324C10.1351 6.12181 9.16941 6.12181 8.2077 6.19324C7.66497 6.99051 7.18213 7.82694 6.76315 8.69565C7.18213 9.56436 7.66497 10.4008 8.2077 11.1981ZM13.1921 7.17104C13.273 6.95214 13.348 6.73665 13.4161 6.52286C13.1928 6.47441 12.9685 6.43096 12.7432 6.39255C12.8983 6.64884 13.048 6.9084 13.1921 7.17104ZM4.65254 6.85334C4.36295 6.94703 4.08869 7.04924 3.83146 7.15996C2.58366 7.69486 1.98659 8.29959 1.98659 8.69565C1.98659 9.09171 2.58281 9.69645 3.83146 10.2313C4.08869 10.3421 4.36295 10.4443 4.65254 10.538C4.84163 9.94175 5.07585 9.32339 5.35523 8.69565C5.08678 8.09515 4.85218 7.48008 4.65254 6.85334ZM5.88756 6.52286C5.95655 6.7358 6.03151 6.95214 6.11242 7.17019C6.25682 6.90782 6.40676 6.64855 6.56214 6.39255C6.33217 6.43173 6.10731 6.47517 5.88841 6.52286H5.88756ZM14.652 10.538C14.9416 10.4443 15.2158 10.3421 15.473 10.2313C16.7208 9.69645 17.3179 9.09171 17.3179 8.69565C17.3179 8.29959 16.7217 7.69486 15.473 7.15996C15.2041 7.04541 14.9302 6.94309 14.652 6.85334C14.4629 7.44956 14.2287 8.06792 13.9493 8.69565C14.2287 9.32339 14.4629 9.9409 14.652 10.538ZM13.4169 10.8684C13.348 10.6555 13.273 10.4392 13.1921 10.2211C13.0477 10.4835 12.8977 10.7428 12.7424 10.9988C12.9723 10.9596 13.1972 10.9161 13.4161 10.8684H13.4169Z"
              fill="#011221"
            />
          </svg>
        </div>
      )}
      {project.framework === "html" && (
        <div className="absolute top-3 right-3 z-10 bg-[#86E1F9] rounded-sm p-1 ">
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 16.178L13.62 14.922L14.243 8.144H6.026L5.822 5.89H14.448L14.675 3.679H3.325L3.961 10.357H11.781L11.52 13.223L9 13.89L6.48 13.223L6.322 11.379H4.052L4.381 14.923L9 16.178ZM0 0H18L16.377 18L9 20L1.623 18L0 0Z"
              fill="#607B96"
            />
          </svg>
        </div>
      )}
      {project.framework === "laravel" && (
        <div className="absolute top-3 right-3 z-10 bg-[#86E1F9] rounded-sm p-1 ">
          <svg
            width="18"
            height="18"
            viewBox="0 0 128 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.887 18.316L17.607 22.839L20.114 27.021C21.415 29.191 22.716 31.361 24.015 33.531L26.677 37.971L30.559 44.436L35.308 52.372C36.677 54.657 38.049 56.941 39.42 59.225L39.604 59.492C39.803 59.554 39.961 59.501 40.125 59.462C41.932 59.028 43.739 58.597 45.546 58.166C48.477 57.466 51.408 56.768 54.338 56.067L58.93 54.969C61.892 54.261 64.856 53.555 67.819 52.845C70.815 52.129 73.809 51.409 76.804 50.691C78.318 50.328 79.832 49.966 81.347 49.605L90.139 47.509L99.714 45.229L100.231 45.089L100.09 44.809C99.221 43.577 98.348 42.347 97.477 41.116L94.896 37.462L92.136 33.564L89.497 29.827L86.883 26.134L84.182 22.318L81.536 18.587L80.14 16.618C79.9256 16.3177 79.758 15.9866 79.643 15.636C79.368 14.78 79.682 14.211 80.181 13.79C80.5023 13.5178 80.877 13.3158 81.281 13.197C81.8407 13.0244 82.4088 12.8802 82.983 12.765C84.134 12.548 85.292 12.363 86.448 12.171C87.752 11.954 89.057 11.747 90.363 11.532C91.188 11.396 92.013 11.253 92.839 11.113L96.206 10.546C97.2953 10.3631 98.385 10.1821 99.475 10.003L103.043 9.42L105.52 9.003C106.46 8.846 107.402 8.689 108.343 8.535C109.517 8.344 110.689 8.151 111.864 7.967C112.562 7.858 113.263 7.819 113.957 8.019C114.478 8.17 114.951 8.414 115.393 8.725L116.003 9.151C116.064 9.01 115.976 8.934 115.936 8.853C115.069 7.0869 113.84 5.52252 112.33 4.261C110.927 3.08285 109.305 2.19379 107.557 1.645C106.517 1.315 105.448 1.162 104.358 1.08L103.823 1H24.561L24.132 1.069C23.178 1.144 22.24 1.286 21.317 1.539C19.3226 2.08216 17.4764 3.06831 15.916 4.424C14.9867 5.22072 14.1678 6.1378 13.481 7.151C12.4126 8.71372 11.6786 10.4803 11.325 12.34L11.786 13.143C12.819 14.869 13.853 16.592 14.887 18.316ZM20.128 106.141C21.098 106.514 22.1 106.776 23.134 106.903L24.181 106.95C24.344 106.971 24.501 107 24.661 107H56.949C56.897 107 56.85 106.851 56.792 106.75C55.521 104.582 54.238 102.454 52.982 100.278C51.402 97.5404 49.8336 94.796 48.277 92.045C46.613 89.101 44.964 86.155 43.312 83.203C41.7433 80.3979 40.1773 77.5912 38.614 74.783C37.67 73.085 36.731 71.387 35.789 69.688L35.537 69.3L35.079 69.391C34.171 69.625 33.265 69.862 32.358 70.1C31.096 70.432 29.836 70.77 28.573 71.1C25.739 71.838 22.904 72.571 20.07 73.307C17.187 74.055 14.366 74.805 11.481 75.55C11.306 75.596 12 75.612 11 75.642V93.547C12 93.651 11.136 93.841 11.158 94.024C11.224 94.554 11.243 95.088 11.337 95.614C11.6762 97.5477 12.4354 99.3835 13.561 100.992C15.225 103.384 17.413 105.095 20.128 106.141ZM14.006 65.751L24.014 63.374L28.41 62.335C29.142 62.161 29.878 61.994 30.604 61.798C31.25 61.623 31.331 61.409 30.998 60.825C30.517 59.981 30.028 59.143 29.54 58.303L25.252 50.92L20.965 43.535L16.601 36.022L12.865 29.595L11.312 26.814C11.212 26.644 12.001 26.443 11.001 26.353V66.488C11.001 66.461 11.205 66.438 11.334 66.407L14.006 65.751ZM116.677 94.439C115.369 94.904 114.062 95.372 112.754 95.84C109.777 96.9069 106.801 97.9742 103.824 99.042C102.172 99.635 100.52 100.235 98.865 100.826C95.494 102.03 92.121 103.229 88.748 104.43C86.793 105.126 84.838 105.755 82.885 106.454C82.35 106.647 81.822 107 81.292 107H103.723L104.207 106.954C104.774 106.933 105.339 106.873 105.898 106.773C108.165 106.368 110.294 105.4 112.089 103.958C113.48 102.85 114.647 101.487 115.527 99.942C116.447 98.336 116.993 96.613 117.255 94.789C117.278 94.632 117.327 94.461 117.195 94.298C117.011 94.284 116.846 94.378 116.677 94.439ZM114.75 64.318C113.76 62.965 112.77 61.614 111.782 60.26C110.42 58.391 109.059 56.52 107.699 54.651C107.146 53.892 106.586 53.139 106.045 52.372C105.883 52.141 105.697 52.08 105.444 52.148L105.299 52.19L97.782 54.013L93.293 55.102L84.511 57.235L75.824 59.346C72.814 60.075 69.804 60.802 66.796 61.532C63.835 62.251 60.875 62.972 57.915 63.692L49.326 65.777C47.813 66.144 46.301 66.51 44.789 66.88C44.566 66.934 44.326 66.947 44.09 67.127L44.292 67.512C45.56 69.702 46.827 71.891 48.098 74.079C49.536 76.557 50.976 79.034 52.419 81.509C54.006 84.229 55.597 86.948 57.187 89.668C58.1 91.23 59.008 92.795 59.929 94.353C60.9508 96.0847 61.9821 97.8107 63.023 99.531C63.335 100.046 63.689 100.537 64.046 101.021C64.286 101.344 64.583 101.62 64.933 101.831C65.293 102.049 65.683 102.117 66.092 102.025C66.304 101.977 66.511 101.907 66.716 101.836L67.47 101.557C70.21 100.619 72.95 99.682 75.693 98.748C77.832 98.019 79.973 97.295 82.114 96.571C84.239 95.851 86.365 95.133 88.49 94.416L94.819 92.279C96.976 91.55 99.133 90.821 101.29 90.09C103.937 89.192 106.584 88.29 109.232 87.394C111.785 86.53 114.339 85.671 116.894 84.81C117.05 84.757 117.223 84.735 117.353 84.563L117.369 84.191C117.369 78.895 117.368 73.597 117.375 68.3C117.38 68.033 117.293 67.7723 117.129 67.562C116.328 66.485 115.541 65.4 114.75 64.318ZM114.311 14.411C113.716 13.658 112.959 13.419 112.032 13.661C111.628 13.767 111.213 13.833 110.802 13.909C109.451 14.156 108.101 14.399 106.75 14.644C104.774 15.003 102.799 15.366 100.822 15.721C99.258 16.003 97.691 16.279 96.126 16.554L89.845 17.653C89.581 17.699 89.315 17.745 89.062 17.826C88.692 17.945 88.584 18.177 88.753 18.525C88.892 18.809 89.064 19.081 89.25 19.337C90.548 21.127 91.854 22.913 93.158 24.699C94.956 27.162 96.756 29.625 98.555 32.087C100.077 34.17 101.601 36.253 103.125 38.335C104.322 39.972 105.52 41.607 106.718 43.243L106.955 43.529C110.402 42.676 113.844 41.826 117.345 40.961L117.369 40.423C117.369 33.215 117.368 26.008 117.375 18.801C117.375 18.483 117.297 18.227 117.098 17.975C116.223 16.872 115.366 15.756 114.501 14.645L114.311 14.411ZM117.106 49.333C115.534 49.71 113.957 50.07 112.347 50.496C112.518 50.799 116.932 56.758 117.189 57.04L117.351 57.129L117.369 56.766V54.256C117.371 52.801 117.375 51.345 117.371 49.89C117.371 49.712 117.42 49.523 117.299 49.343L117.106 49.333ZM12.93 127V109.867H16.563V124H23.512V127H12.93ZM36.977 127L35.735 122.922H29.489L28.246 127H24.332L30.379 109.797H34.82L40.891 127H36.977ZM34.867 119.875C33.719 116.18 33.072 114.09 32.928 113.605C32.784 113.12 32.68 112.738 32.617 112.457C32.359 113.457 31.621 115.93 30.402 119.875H34.867ZM46.68 120.426V127H43.047V109.867H48.039C50.367 109.867 52.09 110.291 53.207 111.138C54.324 111.985 54.883 113.273 54.883 114.999C54.883 116.007 54.606 116.903 54.051 117.688C53.496 118.473 52.711 119.088 51.696 119.534C54.274 123.386 55.954 125.874 56.735 126.999H52.704L48.614 120.425H46.68V120.426ZM46.68 117.473H47.852C49 117.473 49.848 117.282 50.395 116.899C50.942 116.516 51.215 115.915 51.215 115.094C51.215 114.282 50.936 113.703 50.377 113.36C49.818 113.017 48.953 112.844 47.781 112.844H46.68V117.473ZM69.379 127L68.137 122.922H61.891L60.648 127H56.734L62.781 109.797H67.222L73.293 127H69.379ZM67.27 119.875C66.122 116.18 65.475 114.09 65.331 113.605C65.187 113.12 65.083 112.738 65.02 112.457C64.762 113.457 64.024 115.93 62.805 119.875H67.27ZM85.223 109.867H88.891L83.066 127H79.105L73.293 109.867H76.961L80.184 120.062C80.364 120.664 80.549 121.365 80.741 122.166C80.933 122.967 81.052 123.523 81.098 123.836C81.184 123.117 81.477 121.859 81.977 120.063L85.223 109.867ZM100.914 127H91.047V109.867H100.914V112.844H94.68V116.606H100.481V119.583H94.68V124H100.914V127ZM104.488 127V109.867H108.121V124H115.07V127H104.488Z"
              fill="#FD4F31"
            />
          </svg>
        </div>
      )}
      {project.framework === "next" && (
        <div className="absolute top-3 right-3 z-10 bg-[#86E1F9] rounded-sm p-1 ">
          <svg
            width="18"
            height="18"
            viewBox="0 0 128 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M64 0C28.7 0 0 28.7 0 64C0 99.3 28.7 128 64 128C75.2 128 85.7 125.1 94.8 120.1L48.4 55.3V91.9H41.6V41.8H48.4L98.9 117.6C116.4 106.2 128 86.5 128 64C128 28.7 99.3 0 64 0ZM86.1 84.6L78.6 73.3V41.8H86.1V84.6Z"
              fill="black"
            />
          </svg>
        </div>
      )}
      {project.framework === "express" && (
        <div className="absolute top-3 right-3 z-10 bg-[#86E1F9] rounded-sm p-1 ">
          <svg
            width="16"
            height="16"
            viewBox="0 0 128 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M126.67 98.4397C122.11 99.5997 119.29 98.4897 116.76 94.6897C111.08 86.1797 104.81 78.0597 98.7598 69.7897C97.9798 68.7197 97.1698 67.6697 96.1598 66.3397C88.9998 75.9997 81.8498 85.1997 75.1398 94.7697C72.7398 98.1897 70.2198 99.6797 65.7398 98.4697L92.6598 62.3397L67.5998 29.7097C71.9098 28.8697 74.8898 29.2997 77.5298 33.1597C83.3598 41.6797 89.7898 49.7897 96.1998 58.3697C102.65 49.8197 109 41.6997 115 33.2597C117.41 29.8397 120 28.5397 124.33 29.7997C121.05 34.1497 117.84 38.4297 114.61 42.6797C110.25 48.4097 105.97 54.2097 101.45 59.8197C99.8398 61.8197 100.1 63.1197 101.54 65.0097C109.9 75.9997 118.16 87.0997 126.67 98.4397ZM1.3298 61.7397C2.0498 58.1297 2.5298 54.4497 3.5298 50.9097C9.5298 29.4797 34.1298 20.5697 51.0298 33.8497C60.9298 41.6397 63.3898 52.6197 62.8998 64.9997H7.0998C6.2598 87.2097 22.2498 100.62 42.6298 93.7797C49.7798 91.3797 53.9898 85.7797 56.0998 78.7797C57.1698 75.2697 58.9398 74.7197 62.2398 75.7197C60.5498 84.4797 56.7198 91.7997 48.7198 96.3797C36.7198 103.24 19.5898 101.02 10.5798 91.4897C5.2598 85.8897 2.9998 78.9197 1.9998 71.3897C1.8498 70.1897 1.5398 69.0097 1.2998 67.8197C1.3198 65.793 1.3298 63.7663 1.3298 61.7397ZM7.1998 60.2497H57.6298C57.2998 44.1897 47.2998 32.7797 33.6298 32.6797C18.6298 32.5597 7.8498 43.6997 7.1998 60.2497Z"
              fill="black"
            />
          </svg>
        </div>
      )}
    </>
  );
}
