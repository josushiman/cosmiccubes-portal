import { Box } from "@mui/material";
import useAsync from "../../hooks/useAsync";

const CardBalances = () => {
  const { data, loading, error } = useAsync("/ynab/card-balances");

  if (loading || !data) {
    // Add skeleton
    return <div>Loading...</div>;
  }

  if (error) {
    // Pass generic error message
    return <div>Error: {error.message}</div>;
  }

  const amexLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="32"
      viewBox="0 0 50 32"
      fill="none"
      style={{ alignSelf: "center" }}
    >
      <path
        d="M2.56 6.10352e-05H47.36C48.7739 6.10352e-05 49.92 1.14624 49.92 2.56006V29.4401C49.92 30.854 48.7739 32.0001 47.36 32.0001H2.56C1.14618 32.0001 0 30.854 0 29.4401V2.56006C0 1.14624 1.14618 6.10352e-05 2.56 6.10352e-05Z"
        fill="#2557D6"
      />
      <path
        d="M0.0161891 15.0842H2.41241L2.9527 13.8355H4.1623L4.70118 15.0842H9.41593V14.1296L9.8368 15.0883H12.2843L12.7052 14.1154V15.0842H24.4223L24.4169 13.0346H24.6436C24.8022 13.0399 24.8486 13.0539 24.8486 13.305V15.0842H30.9087V14.6071C31.3976 14.858 32.1579 15.0842 33.1582 15.0842H35.7077L36.2533 13.8356H37.4629L37.9965 15.0842H42.9094V13.8982L43.6535 15.0842H47.5905V7.24359H43.6941V8.16954L43.1487 7.24359H39.1506V8.16954L38.6496 7.24359H33.2493C32.3454 7.24359 31.5508 7.36449 30.9089 7.70138V7.24359H27.1822V7.70138C26.7737 7.35412 26.2171 7.24359 25.5982 7.24359H11.9828L11.0693 9.26862L10.1311 7.24359H5.84281V8.16954L5.37164 7.24359H1.71437L0.0158691 10.9713V15.084H0.0160611L0.0161891 15.0842ZM15.1419 13.9533H13.7043L13.6989 9.55047L11.6653 13.9532H10.434L8.39507 9.54657V13.9532H5.54259L5.00371 12.6993H2.08358L1.53926 13.9532H0.0159971L2.52742 8.33166H4.6112L6.99641 13.6542V8.33166H9.28544L11.1208 12.1452L12.8068 8.33166H15.1419L15.1419 13.9533ZM4.52435 11.5326L3.56448 9.29153L2.60992 11.5326H4.52435ZM20.8635 13.9532H16.1786V8.33159H20.8635V9.50222H17.5811V10.5155H20.7849V11.6678H17.581V12.7905H20.8635L20.8635 13.9532ZM27.4658 9.84564C27.4658 10.7419 26.8415 11.205 26.4777 11.344C26.7845 11.4559 27.0467 11.6536 27.1715 11.8174C27.3695 12.097 27.4036 12.3468 27.4036 12.8488V13.9532H25.989L25.9837 13.2442C25.9837 12.906 26.0175 12.4195 25.7624 12.1491C25.5574 11.9513 25.2451 11.9084 24.7401 11.9084H23.2346V13.9532H21.8321V8.33159H25.0578C25.7745 8.33159 26.3027 8.3497 26.756 8.60084C27.1997 8.85198 27.4658 9.21857 27.4658 9.84564ZM25.6931 10.6803C25.5002 10.7925 25.2724 10.7962 24.9992 10.7962H23.2955V9.54753H25.0224C25.2667 9.54753 25.5219 9.55802 25.6875 9.6489C25.8694 9.73082 25.982 9.9051 25.982 10.1459C25.982 10.3916 25.8749 10.5893 25.6931 10.6803ZM29.7151 13.9532H28.2842V8.33159H29.7151V13.9532ZM46.3269 13.9532H44.3395L41.6813 9.73383V13.9532H38.8251L38.2794 12.6993H35.366L34.8367 13.9532H33.1952C32.5137 13.9532 31.6504 13.8087 31.1617 13.3314C30.6689 12.8541 30.4124 12.2076 30.4124 11.1853C30.4124 10.3516 30.5657 9.58938 31.1684 8.98708C31.6218 8.53844 32.3319 8.33159 33.2983 8.33159H34.6561V9.53614H33.3267C32.8149 9.53614 32.5258 9.6091 32.2475 9.86913C32.0085 10.1059 31.8445 10.5533 31.8445 11.1425C31.8445 11.7448 31.9693 12.1791 32.2299 12.4627C32.4458 12.6852 32.8383 12.7526 33.2074 12.7526H33.8372L35.8138 8.33178H37.9153L40.2898 13.649V8.33185H42.4252L44.8904 12.247V8.33185H46.3269V13.9532ZM37.8021 11.5327L36.8315 9.29159L35.8664 11.5327H37.8021ZM49.9007 22.9298C49.5601 23.407 48.8962 23.649 47.9976 23.649H45.2891V22.4433H47.9866C48.2541 22.4433 48.4413 22.4095 48.5541 22.3041C48.6607 22.2097 48.7208 22.0766 48.7199 21.9374C48.7199 21.7735 48.6518 21.6435 48.5486 21.5655C48.4468 21.4796 48.2987 21.4407 48.0544 21.4407C46.7377 21.3978 45.0948 21.4796 45.0948 19.7003C45.0948 18.8848 45.6351 18.0263 47.1069 18.0263H49.9004V16.9077H47.3048C46.5216 16.9077 45.9525 17.0875 45.5496 17.3668V16.9076H41.7105C41.0964 16.9076 40.3759 17.0534 40.0351 17.3668V16.9076H33.1794V17.3668C32.6339 16.9897 31.7133 16.9076 31.2883 16.9076H26.7663V17.3668C26.3346 16.9663 25.3748 16.9076 24.7896 16.9076H19.7286L18.5706 18.1085L17.4859 16.9076H9.92556V24.7534H17.3432L18.5365 23.5334L19.6607 24.7534L24.233 24.7573V22.9116H24.6823C25.289 22.9206 26.0045 22.897 26.6358 22.6357V24.7531H30.4072V22.7082H30.5891C30.8212 22.7082 30.8441 22.7174 30.8441 22.9395V24.7528H42.3007C43.028 24.7528 43.7883 24.5745 44.2095 24.2508V24.7528H47.8434C48.5995 24.7528 49.338 24.6513 49.9 24.3913L49.9001 22.9295L49.9007 22.9298ZM27.1845 19.9119C27.1845 21.4739 25.9682 21.7964 24.7423 21.7964H22.9924V23.6824H20.2666L18.5396 21.8209L16.7449 23.6824H11.1896V18.0594H16.8302L18.5557 19.9025L20.3397 18.0594H24.8211C25.9339 18.0594 27.1845 18.3546 27.1845 19.9119ZM16.0344 22.4997H12.5862V21.3809H15.6653V20.2337H12.5862V19.2113H16.1023L17.6363 20.85L16.0344 22.4997ZM21.5903 23.1435L19.4371 20.853L21.5903 18.6354V23.1435ZM24.7747 20.6433H22.9624V19.2113H24.791C25.2973 19.2113 25.6488 19.4091 25.6488 19.9007C25.6488 20.3871 25.3136 20.6433 24.7747 20.6433ZM34.2698 18.0594H38.9506V19.2223H35.6664V20.2446H38.8704V21.3918H35.6664V22.5105L38.9505 22.5157V23.6824H34.2696L34.2698 18.0594ZM32.4701 21.0693C32.7823 21.1797 33.0375 21.3775 33.1571 21.5413C33.3552 21.8159 33.3838 22.0721 33.3895 22.5676V23.6824H31.9814V22.9789C31.9814 22.6406 32.0154 22.1397 31.7547 21.8782C31.5498 21.6768 31.2374 21.6287 30.7258 21.6287H29.2269V23.6824H27.8177V18.0595H31.0557C31.7656 18.0595 32.2827 18.0895 32.7431 18.3248C33.1857 18.5811 33.4641 18.932 33.4641 19.5735C33.4641 20.4709 32.8392 20.9289 32.4701 21.0693ZM31.6775 20.3584C31.4899 20.4651 31.2579 20.4743 30.9851 20.4743H29.2813V19.2115H31.0082C31.2579 19.2115 31.5078 19.2166 31.6775 19.313C31.8593 19.4041 31.9679 19.5784 31.9679 19.8188C31.9679 20.0593 31.8592 20.2531 31.6775 20.3584ZM44.338 20.7166C44.6113 20.9873 44.7574 21.3292 44.7574 21.9078C44.7574 23.1174 43.9688 23.6821 42.5542 23.6821H39.8227V22.4764H42.5434C42.8094 22.4764 42.998 22.4428 43.1162 22.3372C43.2127 22.2502 43.2819 22.1238 43.2819 21.9705C43.2819 21.8066 43.207 21.6766 43.1107 21.5986C43.0035 21.5128 42.8555 21.4739 42.6113 21.4739C41.2997 21.431 39.6572 21.5128 39.6572 19.7336C39.6572 18.918 40.1919 18.0595 41.6623 18.0595H44.474V19.2563H41.9013C41.6463 19.2563 41.4805 19.2655 41.3395 19.3578C41.1859 19.4488 41.1289 19.584 41.1289 19.7622C41.1289 19.9743 41.2593 20.1187 41.4358 20.1812C41.5837 20.2305 41.7427 20.2449 41.9814 20.2449L42.7364 20.2645C43.4977 20.2821 44.0203 20.4083 44.338 20.7166ZM49.9031 19.2113H47.3471C47.092 19.2113 46.9222 19.2206 46.7796 19.3129C46.6316 19.404 46.5747 19.5391 46.5747 19.7175C46.5747 19.9296 46.6995 20.0739 46.8813 20.1363C47.0292 20.1857 47.1882 20.2001 47.4217 20.2001L48.1819 20.2195C48.9488 20.2377 49.4607 20.364 49.7729 20.6721C49.8299 20.715 49.8639 20.7631 49.903 20.8113V19.2113H49.9031Z"
        fill="white"
      />
    </svg>
  );

  const barclayLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="32"
      viewBox="0 0 64 32"
      fill="none"
      style={{ alignSelf: "center" }}
    >
      <path
        d="M21.5605 19.2603H19.232C19.5333 18.9862 19.616 18 19.7253 16.2192L19.752 15.8086L19.8613 13.48C19.8613 13.0144 19.8064 12.7131 19.6693 12.6032H22.272C22.9013 12.6032 24.1349 12.6299 24.1349 13.9184C24.1349 14.7952 23.3349 15.3158 22.6005 15.5078C23.6416 15.5899 24.4139 16.1104 24.4139 17.1787C24.4405 18.3291 23.3456 19.2608 21.5648 19.2608M21.4827 16.0288H21.0171L20.9349 17.0155L20.88 18.2486C20.88 18.3035 21.072 18.4406 21.5093 18.4406C22.4411 18.4406 23.0437 17.975 23.0437 17.2075C23.0704 16.3584 22.3312 16.0342 21.4821 16.0342M21.6741 13.4048C21.5371 13.4048 21.3728 13.4048 21.2085 13.4315C21.1264 13.8971 21.0992 14.3355 21.0715 14.8555L21.0448 15.2395H21.2091C22.0581 15.2395 22.8251 14.9382 22.8251 14.1712C22.8517 13.7328 22.4688 13.4043 21.6747 13.4043M29.888 19.3216C29.312 19.3216 29.2587 19.295 28.8197 17.7323L28.6555 17.1563C28.3813 17.2934 27.8885 17.3483 27.1211 17.3483H26.3211L26.184 17.6496C26.0469 17.951 25.7184 18.5814 25.7184 18.9648C25.7161 19.066 25.7252 19.1671 25.7456 19.2662H24.1563C24.5947 18.8278 25.1973 17.7595 25.992 16.0662L26.4576 15.0795L27.3344 13.0246C27.3344 12.8875 27.3077 12.7782 27.2523 12.6406H28.704L29.4165 15.2699L29.6907 16.311C30.184 18.0923 30.512 18.9403 30.896 19.2699L29.8827 19.3248M27.8005 14.1744L26.7045 16.503H28.4581L27.8005 14.1744ZM36.1845 19.544C35.6912 19.544 35.5819 19.4619 35.4176 19.2427L33.5275 16.6667C33.3904 16.4534 33.2533 16.3104 33.0341 16.3104H33.0075L32.9808 16.831L32.8987 18.4747C32.8987 18.9131 32.9536 19.1872 33.0907 19.296H31.2773C31.5515 19.0827 31.6336 18.3094 31.7979 16.255L31.8245 15.8443L31.9339 13.5158C31.9339 13.0502 31.8789 12.7488 31.7419 12.639H34.1803C35.0016 12.639 36.0704 12.776 36.0704 14.063C36.0704 15.1312 35.3579 15.7067 34.4811 15.9808C34.5974 16.1029 34.707 16.231 34.8096 16.3648L36.152 18.1462C37.0011 19.2694 37.056 19.3195 37.3573 19.4614C36.9685 19.5149 36.5765 19.5424 36.184 19.5435M33.7733 13.4342C33.6091 13.4342 33.4171 13.4342 33.2528 13.4608C33.1979 13.735 33.1707 14.2278 33.1157 15.0224L33.0891 15.488C33.1712 15.5147 33.3024 15.5147 33.3904 15.5147C34.2117 15.5147 34.7877 14.9942 34.7877 14.2544C34.7611 13.7339 34.4037 13.4331 33.7744 13.4331M39.7243 19.3974C37.9984 19.3974 37.0123 17.9734 37.0123 16.4107C37.0123 14.224 38.2176 12.4928 40.4917 12.4928C41.2043 12.4928 41.5328 12.6299 42.1355 12.6299L41.9712 14.3286C41.6427 13.7259 41.0944 13.3419 40.3819 13.3419C38.9579 13.3419 38.3819 14.8763 38.3819 16.191C38.3819 17.615 39.2032 18.4096 40.2448 18.4096C40.8208 18.4096 41.3408 18.2726 42.1899 17.6699C41.8336 18.711 41.0395 19.3958 39.7243 19.3958M51.4496 19.3136C50.8736 19.3136 50.8469 19.287 50.3813 17.7243L50.2171 17.1483C49.9429 17.2854 49.4501 17.3403 48.6827 17.3403H47.8613L47.7243 17.6416C47.5109 18.08 47.2587 18.6006 47.2587 18.9568C47.2587 19.039 47.2853 19.1488 47.2853 19.2582H42.5733C42.8475 18.9568 42.9296 17.9707 43.0667 16.2171L43.0933 15.8064L43.2027 13.4779C43.2027 13.0395 43.1477 12.7382 43.0384 12.6011H44.8741C44.6 12.7931 44.5179 13.8614 44.4085 15.6422L44.3819 16.0528L44.2448 18.0251C44.2448 18.3264 44.3541 18.4091 44.6832 18.4091C45.8064 18.4091 46.0528 18.3824 46.5733 18.0528C46.9019 17.4768 47.2309 16.7654 47.5867 16.0262L48.0523 15.0395L48.9291 12.9846C48.9291 12.8475 48.9024 12.7382 48.8469 12.6006H50.2933L51.0059 15.2299L51.28 16.271C51.7733 18.0523 52.08 18.9003 52.5131 19.2299C52.1587 19.2766 51.8021 19.304 51.4448 19.312M49.3627 14.1616L48.2944 16.4902H50.0203L49.3627 14.1616ZM55.6091 15.6683L55.1435 16.5451C55.0341 17.0384 55.0064 17.6955 55.0064 18.408C55.0064 18.7094 55.0613 19.1206 55.1984 19.2571H53.3851C53.7136 18.9558 53.8235 17.12 53.8235 16.5174C53.5771 15.696 53.2475 14.8736 52.7552 13.888C52.4267 13.2854 52.0704 12.7147 51.8235 12.6006L52.9968 12.5456C53.4352 12.5456 53.5728 12.6006 53.8459 13.2032L54.7776 15.4496L55.9509 13.5595C56.0331 13.3952 56.1429 13.1755 56.1429 12.9835C56.1429 12.8464 56.1163 12.655 56.0608 12.5995H57.8421C57.4581 12.6816 55.9243 15.12 55.5957 15.6678M61.6224 14.1611C61.3483 13.6678 60.7456 13.2843 60.088 13.2843C59.512 13.2843 59.0197 13.4976 59.0197 14.1056C59.0197 14.6262 59.6491 14.9547 60.3072 15.3931C61.0197 15.8315 61.7589 16.3798 61.7589 17.3382C61.7589 18.5712 60.5536 19.3648 59.1296 19.3648C58.5536 19.3648 57.9563 19.2555 57.2667 19.0086L57.376 17.3648C57.7045 18.0224 58.3077 18.5382 59.2117 18.5382C59.8965 18.5382 60.4448 18.2096 60.4448 17.6064C60.4448 17.1131 60.0341 16.7851 59.5131 16.4832C58.4171 15.8256 57.7317 15.3099 57.7317 14.3462C57.7317 12.9222 58.9051 12.456 60.1701 12.456C60.8827 12.456 61.3435 12.5931 61.7861 12.5931L61.6224 14.1611Z"
        fill="#00AEEF"
      />
      <path
        d="M16.5963 11.3984C16.4501 11.0571 16.2069 10.6678 15.7685 10.376C15.5739 10.2299 15.3301 10.0838 15.0869 9.9867C14.8923 9.93337 14.6976 9.8891 14.4539 9.8891H14.4005C14.1083 9.8891 13.5728 9.94243 13.2805 10.376C13.1344 10.5222 13.0859 10.8144 13.1344 11.0576C13.1877 11.2523 13.3291 11.447 13.5237 11.496C13.5647 11.5298 13.6168 11.5471 13.6699 11.5446C13.6699 11.5979 13.6165 11.6907 13.6165 11.6907C13.4704 11.8368 13.2272 12.08 12.4965 12.08H12.4432C12.0539 12.0267 11.7616 11.9339 11.3232 11.4955C11.0795 11.2032 10.9339 10.6678 10.9339 9.84003C10.9339 9.40163 10.8805 9.06137 10.7877 8.77337C10.7344 8.5787 10.544 8.38403 10.3984 8.28643C10.2528 8.18883 10.1547 8.1403 9.91145 8.0427L9.08372 7.9451C8.79145 7.9451 8.59679 7.99843 8.49919 8.13977H8.20692C8.06079 8.13977 7.86559 8.1931 7.71999 8.1931C7.42772 8.24643 7.23305 8.38777 7.03839 8.53443C6.98505 8.58777 6.79465 8.77817 6.74612 8.97283C6.74612 9.11896 6.79945 9.2651 6.79945 9.31417L6.85279 9.3675C6.95039 9.2699 7.14505 9.22137 7.38825 9.22137C7.72959 9.22137 8.21599 9.3675 8.31359 9.6107C8.55732 10 8.45972 10.2923 8.45972 10.6331C8.31359 11.5584 7.97279 11.9968 7.24212 12.0944C7.09599 12.1478 6.94985 12.1478 6.85279 12.1478C6.31732 12.1478 5.92745 12.0016 5.73279 11.6608V11.5632C5.73279 11.5632 5.78612 11.5632 5.83039 11.5099C6.02505 11.4123 6.17172 11.2662 6.21972 11.0715C6.27305 10.8278 6.21972 10.5846 6.07359 10.3899C5.78132 10.0976 5.39199 9.90297 4.95359 9.90297C4.66132 9.90297 4.46665 9.9563 4.27199 10.0006C3.68745 10.1467 3.15199 10.6336 2.76265 11.4128C2.47039 11.9974 2.27572 12.679 2.22719 13.4582C2.17865 14.2374 2.17385 14.8704 2.22719 15.4544C2.28052 16.4283 2.47092 17.0128 2.71412 17.6411C2.95732 18.2694 3.24745 18.8587 3.58879 19.3958C3.68639 19.5419 3.73492 19.688 3.83252 19.7851L3.88585 19.7318C3.93919 19.6784 3.98345 19.6342 4.03199 19.5371C4.22665 19.391 4.56745 18.904 4.66505 18.7584C4.76265 18.6128 4.90879 18.3691 5.00639 18.1254L5.05972 18.0278L5.15732 18.0811C5.25492 18.1787 5.30345 18.3248 5.30345 18.4704C5.30345 18.616 5.25012 18.7627 5.15732 19.055C5.05972 19.3963 4.86505 19.7856 4.67039 20.175C4.72372 20.2283 4.72372 20.3211 4.67039 20.3211C4.52425 20.5648 4.52425 20.6624 4.52425 20.7595H4.57759C4.63092 20.7595 4.82132 20.7062 4.96692 20.5648C5.11305 20.4672 5.50239 20.1264 5.98932 19.4448C6.37865 18.9579 6.62239 18.4224 6.91465 17.8379L6.96799 17.7403L7.06559 17.7936C7.11892 17.847 7.16319 17.847 7.21172 17.8912C7.26505 17.9888 7.26505 18.135 7.26505 18.2806C7.21172 18.6699 6.97279 19.2059 6.82665 19.5952C6.53439 20.2768 5.99892 21.0075 5.60905 21.543C5.59822 21.5773 5.57928 21.6085 5.55385 21.6339C5.52841 21.6593 5.49722 21.6783 5.46292 21.6891C5.51625 21.7424 5.56052 21.7867 5.65759 21.8352L5.80372 21.9814C6.31623 22.4097 6.87089 22.785 7.45919 23.1014C7.94612 23.3936 8.92052 23.88 9.60159 24.0752C10.2832 23.9291 11.2571 23.3936 11.744 23.1014C12.3323 22.785 12.8869 22.4097 13.3995 21.9814L13.5456 21.8352C13.6432 21.7819 13.6917 21.6891 13.7403 21.6891C13.7936 21.5915 13.7936 21.543 13.7936 21.4944L13.7403 21.4411C13.3509 20.9542 12.8149 20.175 12.5227 19.4934C12.3765 19.104 12.1333 18.568 12.0843 18.1787C12.0309 18.0326 12.0843 17.8864 12.1376 17.7894L12.2352 17.6918C12.2885 17.6384 12.3813 17.6384 12.3813 17.6384L12.4347 17.736C12.7269 18.3206 13.0192 18.856 13.36 19.343C13.8469 20.0246 14.2363 20.3654 14.3824 20.463C14.5285 20.6091 14.6747 20.6576 14.7717 20.6576H14.8251C14.8784 20.6043 14.8251 20.5115 14.6789 20.2683C14.6256 20.215 14.6256 20.1707 14.6256 20.1222C14.4309 19.7328 14.2363 19.3435 14.1387 19.0022C14.0411 18.7099 13.9925 18.5152 13.9925 18.4176C13.9925 18.2715 14.0459 18.1254 14.1387 18.0283L14.2363 17.975L14.2896 18.0726C14.3872 18.3163 14.5819 18.608 14.6789 18.7542C14.776 18.9003 15.1659 19.3387 15.2635 19.4848C15.3611 19.5824 15.4096 19.631 15.4096 19.6795L15.4629 19.7328C15.5163 19.6795 15.5605 19.5867 15.6576 19.3915L15.7109 19.3382C16.0032 18.8512 16.2955 18.2182 16.5387 17.5851C16.7824 17.0006 16.928 16.3675 17.0256 15.3984C17.0789 14.8139 17.1232 14.1808 17.0256 13.4022C17.0789 12.6715 16.8795 11.9408 16.6363 11.4059L16.5963 11.3984Z"
        fill="url(#paint0_radial_1_215)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_1_215"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(2.62367 10.7528) scale(16.4476 16.4476)"
        >
          <stop stopColor="#20C4F4" />
          <stop offset="0.305" stopColor="#09B4F0" />
          <stop offset="0.5" stopColor="#00AEEF" />
          <stop offset="0.8" stopColor="#0092C8" />
          <stop offset="1" stopColor="#006E98" />
        </radialGradient>
      </defs>
    </svg>
  );

  const hsbcLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="32"
      viewBox="0 0 64 32"
      fill="none"
      style={{ alignSelf: "center" }}
    >
      <path d="M9.6123 8.81601H23.9627V23.1664H9.6123V8.81601Z" fill="white" />
      <path
        d="M31.1381 16.0085L23.9627 8.81601V23.184L31.1381 16.0085ZM16.7872 16.0085L23.9627 8.81601H9.61226L16.7872 16.0085ZM2.41919 16.0085L9.61226 23.184V8.81601L2.41919 16.0085ZM16.7872 16.0085L9.61226 23.184H23.9627L16.7872 16.0085Z"
        fill="#DB0011"
      />
      <path
        d="M38.7824 16.5461H35.5467V19.7397H33.9291V12.2603H35.5467V15.328H38.7824V12.2603H40.4V19.7403H38.7824V16.5461ZM44.3077 19.8869C42.6901 19.8869 41.3664 19.2363 41.3451 17.4496H42.9627C42.984 18.248 43.4459 18.7312 44.328 18.7312C44.9787 18.7312 45.736 18.3952 45.736 17.6645C45.736 17.0763 45.232 16.9083 44.392 16.6512L43.8459 16.504C42.6693 16.168 41.4928 15.7056 41.4928 14.3611C41.4928 12.7013 43.0475 12.1339 44.4555 12.1339C45.9051 12.1339 47.1659 12.6379 47.1861 14.2981H45.568C45.5051 13.6261 45.1056 13.2315 44.3493 13.2315C43.7403 13.2315 43.1515 13.5515 43.1515 14.2192C43.1515 14.7653 43.6555 14.9339 44.7061 15.2699L45.3365 15.4592C46.6181 15.8592 47.4379 16.2997 47.4379 17.5605C47.4165 19.2416 45.7781 19.8928 44.3072 19.8928L44.3077 19.8869ZM48.3424 12.2816H50.9477C51.4309 12.2603 51.9355 12.2816 52.4187 12.3659C53.3221 12.576 54.0155 13.1643 54.0155 14.1728C54.0155 15.1392 53.4064 15.6224 52.5237 15.8539C53.5371 16.0432 54.2837 16.5472 54.2837 17.6608C54.2837 19.3675 52.6027 19.7408 51.3003 19.7408H48.3589L48.3424 12.2816ZM50.9477 15.3909C51.6624 15.3909 52.3973 15.2437 52.3973 14.3776C52.3973 13.6 51.7253 13.3899 51.0533 13.3899H49.9189V15.3861L50.9477 15.3909ZM51.0949 18.6267C51.8512 18.6267 52.5867 18.4587 52.5867 17.5333C52.5867 16.608 51.9563 16.44 51.1787 16.44H49.8971V18.6251L51.0949 18.6267ZM58.4907 19.8875C56.0747 19.8875 55.0027 18.3536 55.0027 16.0635C55.0027 13.7733 56.2005 12.1136 58.5744 12.1136C60.0661 12.1136 61.5157 12.7856 61.5579 14.4667H59.8768C59.7925 13.7104 59.2885 13.3323 58.5739 13.3323C57.1029 13.3323 56.6619 14.9083 56.6619 16.1056C56.6619 17.3029 57.1029 18.6901 58.5109 18.6901C59.2469 18.6901 59.7925 18.2901 59.8976 17.5344H61.5787C61.4107 19.2571 60.0448 19.8875 58.4853 19.8875H58.4907Z"
        fill="white"
      />
    </svg>
  );

  const cardBalanceData = data.data;
  const cardBalances = cardBalanceData.map((item, index) => (
    <Box
      key={index}
      sx={{
        display: "flex",
        gap: "1rem",
        height: "3rem",
      }}
    >
      {item.name == "BA AMEX"
        ? amexLogo
        : item.name == "Barclays CC"
        ? barclayLogo
        : hsbcLogo}
      <Box
        sx={{
          backgroundColor: "#242424",
          borderRadius: "0.5rem",
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          padding: "1rem",
          width: "9rem",
          justifyContent: "space-between",
        }}
      >
        <span>£</span>
        <p>{item.balance}</p>
      </Box>
    </Box>
  ));

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      {cardBalances}
    </Box>
  );
};

export default CardBalances;
