"use client";
import React, { useEffect } from "react";
import radiatorpic from "../../../public/assets/bestchoice/enginoil.jpg";
import Image from "next/image";
import Card from "@/components/cardBlur/Card";
import oilpic1 from "../../../public/assets/bestchoice/engine_oil_hero.webp";
import { productData } from "@/data/productData";
import JahanYadakAlt from "../../../public/assets/jahanyadakImageAlt/jahanyadakImage.jpg";
import oilpic2 from "../../../public/assets/bestchoice/Engine-oil-100029.jpg";
import oilpic3 from "../../../public/assets/bestchoice/Machinery-Lubrication-min.jpeg";
import oilpic4 from "../../../public/assets/bestchoice/1_46x132_1656x1009_0x520_car_engine_oil.jpg";
import Link from "next/link";

const Data = [
  {
    id: 1,
    title: "رتبه‌بندی دیزلی یا بنزینی روغن موتور را مشخص کنید",

    desc1:
      "بسیاری از افراد سؤال می‌کنند که آیا می‌توان از روغن موتوری که رتبه‌بندی آن برای خودروهای دیزلی است برای خودروهای بنزینی استفاده کرد یا نه. این سؤال بسیار مهم است. اول اینکه، موتورهای دیزلی «نسبت تراکم» بالاتری در مقایسه با موتورهای بنزینی دارند و بنابراین بسیار داغ می‌شوند. به‌دلیل این نسبت تراکم و نیز ماهیت سوخت دیزل، فرآورده‌های جانبی ناشی از احتراق آنها بیشتر است. درنتیجه باید در فرمول آنها مواد پاک‌کننده بیشتری به‌کار رود.",
    desc2:
      "دوم، روغن‌های موتور دیزلی حاوی ترکیبات ضدکف هستند که مخصوص این نوع موتورهاست. با توجه به اینکه درجه SAE روغن موتور دیزلی بالاتر بوده و حاوی مواد افزودنی بیشتری است که موتور بنزینی نیازی به آنها ندارد، معمولا نباید از آن برای موتور بنزینی استفاده کنید. اما ازآنجاکه روغن‌های جدید به‌شکلی ساخته می‌شوند که هم جوابگوی موتور دیزلی و هم موتور بنزینی باشند، اگر اصرار دارید می‌توانید از آن استفاده کنید. فقط فراموش نکنید نوعی از آن را انتخاب کنید که خصوصیات آن متناسب با همتای بنزینی آن باشد.",
  },
  {
    id: 2,
    title: "تأییدیه‌ها را چک کنید",
    desc1:
      "روی بطری باید تأییدیه OEM و کدها (برای مثال MB229.5, VW504.00, FORD 913A, BMW LL04) وجود داشته باشد. این کدها نشان‌دهنده آن است که روغن موتور از نظر استانداردهای مختلف تأیید شده هستند.",
  },
  {
    id: 3,
    title: " انتخاب بهترین مارک روغن موتور به شما بستگی دارد",
    img: { oilpic4 },
    desc1:
      "تنوع برند روغن موتور در بازار بسیار زیاد است. با این حال، این به خودتان بستگی دارد که از کدام یک از آنها استفاده کنید. از بهترین روغن موتور خارجی می‌توان به برندهای الف، کاسترول، پونته میلانو و نظایر آنها اشاره کرد و از انواع بهترین روغن موتور ایرانی بهران، پارس و نظایر آنها از کیفیت خوبی برخوردارند.",
    desc2:
      "متأسفانه گفته می‌شود با توجه به شرایط فعلی کشور ما و نوع تحریم‌ها، بسیاری از روغن موتورهای خارجی که در بازار ایران هستند، اصل نیستند. یکی از این موارد روغن موتور توتال است که ظاهرا دیگر در ایران فعالیت ندارد اما همچنان در بازار آن را می‌بینیم. به این ترتیب تصمیم با خود شماست. چون روغن موتورهای ایرانی هم از کیفیت و استانداردهای لازم برخوردارند و دارند خوب کار می‌کنند.",
  },
  {
    id: 4,
    title: "قیمت روغن موتور را بررسی کنید",
    desc1:
      "قیمت روغن موتور در بازار بسیار متنوع است و می‌توانید با توجه به بودجه‌تان هر کدام را که به‌صرفه‌تر است خریداری کنید. به‌طورکلی قیمت روغن موتور به عوامل متعددی بستگی دارد. نوع روغن موتور، ویسکوزیته، کیفیت، حجم بطری و نوع برند بر قیمت روغن موتور تأثیرگذار هستند. روغن تمام سنتتیک از روغن موتور نیمه سنتتیک و آن هم به نوبه خود، گران‌تر از روغن موتور معمولی است. درباره ویسکوزیته، مولتی گریدها از سینگل گریدها گران‌تر هستند و در بین خود مولتی گریدها، هر چه عدد کنار حرف W پایین‌تر باشد قیمت هم بالاتر است. مثلا روغن موتور ۵W-30 از ۱۰W-40 گران‌تر است.",
    desc2:
      "درباره برندها، به‌طورکلی برندهای خارجی گران‌تر از برندهای ایرانی هستند، البته اگر اصل آنها را پیدا کنید. تمام این عوامل را در نظر بگیرید و بهترین روغن موتور را انتخاب کنید.",
  },
];

const EnginoilDetailComponent = () => {
  useEffect(async () => {
    const data = await productData();
  }, []);

  return (
    <div className=" lg:-mt-[11rem] font-lalezar ">
      <div className=" bg-black fixed top-0 -z-50 w-full h-[14rem]"></div>
      <div className=" w-full  -z-10   ">
        <Image
          className=" bg-cover  fixed top-56 lg:top-48 xl:top-30 -z-50 bg-center  w-full  lg:h-[70rem]"
          src={radiatorpic}
        />

        <div className=" flex justify-center relative">
          <Card
            style={
              " shadow-cardShadow z-10 rounded-[20px] w-[15rem] md:w-[22rem]  lg:mt-[10rem]   backdrop-blur xl:w-[27rem] xl:h-[11rem]   overflow-hidden p-5 relative"
            }
          >
            <p className=" text-end md:text-2xl xl:text-3xl mb-2 lg:mb-5 text-white">
              بهترین روغن موتور خودرو را چگونه انتخاب کنیم؟
            </p>
            <div className=" flex justify-between lg:text-lg">
            <span className=" text-white ">۱۴۰۲/۶/۱۰</span>
            <Link href='https://karnameh.com/blog/choose-best-car-engine-oil/#:~:text=%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%85%D9%88%D8%AA%D9%88%D8%B1%D9%87%D8%A7%DB%8C%20%D8%AF%DB%8C%D8%B2%D9%84%DB%8C%20%D8%A8%D8%A7%DB%8C%D8%AF%20%D8%AD%D8%B1%D9%81,%D8%AF%D8%B1%20%D8%B3%D8%A7%D9%84%E2%80%8C%D9%87%D8%A7%DB%8C%20%D8%AE%D8%A7%D8%B5%DB%8C%20%D9%85%D9%86%D8%A7%D8%B3%D8%A8%20%D9%87%D8%B3%D8%AA%D9%86%D8%AF.'>
              <span className=" cursor-pointer  text-white"> karname : منبع</span>
            </Link>
            </div>
          </Card>

          <div className=" relative flex justify-center ">
            <span className=" w-[4.2rem] h-[4.2rem] md:w-[7.5rem] md:h-[7.5rem] absolute -bottom-5 right-52 lg:right-80  rounded-full  bg-[#b445ff]"></span>
            <span className=" w-[4.2rem] h-[4.2rem]  md:w-[6.5rem] md:h-[6.5rem] absolute -top-3 lg:top-32 -right-7 rounded-full bg-[#0AAFF5]"></span>
          </div>
        </div>
      </div>
      <div
        dir="rtl"
        className=" w-full flex justify-center items-center flex-col md:px-[10rem] p-3 bg-white dark:bg-slate-900   mt-[22rem]  lg:mt-[60rem] md:mt-[40rem]  z-20"
      >
        <div className=" mb-12">
          <h1 className=" text-2xl lg:text-[3rem] lg:mb-10 mb-5">
            روغن موتور چیست؟
          </h1>
          <p className=" lg:text-xl mb-7">
            به‌طور خلاصه، روغن موتور به اجزای فلزی و متحرک موتور خودرو کمک
            می‌کند تا عملکردی بهینه داشته باشند و اصطکاک بین آنها را کاهش
            می‌دهد. به این ترتیب موتور خودرو از ساییدگی و آسیب‌های ناشی از گرما
            و اصطکاک محفوظ می‌ماند
          </p>
          <Image
            width={0}
            height={0}
            className=" lg:w-[40rem]"
            alt={JahanYadakAlt}
            src={oilpic1}
          />
        </div>

        <div>
          <h1 className=" text-2xl lg:text-[3rem] lg:mb-10 mb-5">
            نوع روغن موتور را انتخاب کنید
          </h1>
          <Image
            className=" mb-7"
            width={0}
            height={0}
            alt={JahanYadakAlt}
            src={oilpic2}
          />
          <p className=" lg:text-xl mb-7">
            عامل بعدی که باید در نظر بگیرید این است که روغن موتور را از چه نوعی
            انتخاب کنید. روغن موتور از نظر شیوه تولید به سه دسته تمام سنتتیک،
            نیمه سنتتیک و معمولی یا مینرال تقسیم می‌شود.
          </p>
          <h3 className=" text-xl lg:text-[3rem] lg:mb-10 mb-5">
            {" "}
            روغن موتور تمام سنتتیک
          </h3>
          <p className=" lg:text-xl mb-7">
            روغن موتور سنتتیک (Full synthetic) را با مواد شیمیایی در آزمایشگاه
            تولید می‌کنند. این روغن موتور بهترین کیفیت را دارد و عملکرد موتور
            خودرو را بهبود می‌بخشد. دیرتر کارایی خود را از دست می‌دهد و بنابراین
            مجبور نمی‌شوید خیلی زود آن را عوض کنید. شاید کمی گران‌تر باشد اما در
            درازمدت به‌صرفه خواهد بود.
          </p>
          <hr className=" mb-5" />
          <p className=" md:text-xl">مزایا</p>
          <ul className=" list-disc  p-2">
            <li>از اجزای متحرک موتور به‌خوبی محافظت می‌کند؛</li>
            <li>ازنظر قیمتی به‌اندازه روغن تمام سنتتیک گران نیست</li>
            <li>سه‌برابر بهتر از روغن معمولی است</li>
          </ul>
          <p className=" md:text-xl">معایب</p>
          <ul className=" list-disc  p-2">
            <li>همه مزایای روغن تمام سنتتیک را ارائه نمی‌دهد</li>
            <li>حداقل ۱۰ دقیقه پس از استارت باید صبر کنید تا موتور گرم شود</li>
          </ul>
          <p className=" lg:text-xl mb-7">
            عبارتی که برای روغن نیمه سنتتیک روی بطری می‌نویسند می‌تواند به دو
            صورت Semi synthetic یا synthetic blend باشد.
          </p>
        </div>

        <div>
          <h3 className=" text-xl lg:text-[3rem] lg:mb-10 mb-5">
            روغن موتور معمولی
          </h3>
          <Image
            width={0}
            height={0}
            className=" mb-7"
            alt={JahanYadakAlt}
            src={oilpic4}
          />
          <p className=" lg:text-xl mb-7">
            این روغن موتور از پایه نفت خام به دست می‌آید و برای تولید آن
            روغن‌های پایه مانند هیدروکربن‌ها، پلی اینترنال الفین و پلی آلفا
            الفین‌ها را ترکیب می‌کنند. ارزان‌ترین نوع روغن موتور است و محافظت از
            موتور را در حد ابتدایی انجام می‌دهد. اگر مدل خودرویتان ساده است یا
            صفر است و می‌خواهید آن را آب‌بندی کنید این روغن موتور مناسب خواهد
            بود.
          </p>
          <hr className="mb-5" />
          <p className=" md:text-xl">مزایا</p>
          <ul className=" list-disc  p-2">
            <li>ارزان است</li>
            <li>برای آب‌بندی خودروی صفر و خودروهای ساده مناسب است</li>
          </ul>
          <p className=" md:text-xl">معایب</p>
          <ul className=" list-disc  p-2">
            <li>محافظت آن از موتور در حد ابتدایی است</li>
            <li>زودبه‌زود باید آن را عوض کنید</li>
            <li> با اینکه ارزان است به صرفه نیست</li>
            <li>نمی‌تواند در سرمای شدید از موتور محافظت کند</li>
            <li>در دمای بالا کارایی‌اش را از دست می‌دهد</li>
          </ul>

          <Image
            width={0}
            height={0}
            className="mb-7"
            alt={JahanYadakAlt}
            src={oilpic3}
          />
        </div>

        <div className=" relative">
          {Data.map((item) => {
            return (
              <div>
                <h1 className=" text-2xl lg:text-[3rem] lg:mb-10 mb-5">
                  {item.title}
                </h1>

                <p className=" lg:text-xl mb-7">{item.desc1}</p>
                <p className=" lg:text-xl mb-7">{item.desc2}</p>
              </div>
            );
          })}
        </div>


      </div>

    


    </div>
  );
};

export default EnginoilDetailComponent;
