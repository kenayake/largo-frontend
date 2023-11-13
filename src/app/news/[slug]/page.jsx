// pages/news/[slug].jsx
import React from "react";

export default function NewsDetail() {
  return (
    <>
      <div className="w-full">
        {/* News Page Content */}
        <div className="p-4 mt-[15vw] md:p-8 md:mt-[7vh] lg:p-12 lg:mt-[5vh]">
          <div className="bg-[#D38E0C] w-[100%] mx-auto rounded-md p-4 md:p-8">
            <div className="bg-[#17303F] w-32 md:py-1 md:px-9 rounded-md text-center text-base">
              Trending
            </div>
            <p className="text-white font-bold text-2xl md:text-3xl pt-1 md:pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <div className="flex flex-row mt-4 md:mt-3 justify-between">
              <div className="text-base">Written by John Smith</div>
              <div className="text-base">
                10 Nov 2023, 20:54
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-col mt-8">
            <div className="w-full md:w-[100%]">
              <div
                className="w-full h-[60vh] bg-cover bg-center rounded mb-4 md:mb-2"
                style={{
                  backgroundImage:
                    "url('https://images.squarespace-cdn.com/content/v1/521c2182e4b0d492d86e62ff/1677620189606-L8KZYICWKJ2D121ULRW1/lfapnzaqqfszwebay8i3.jpg?format=1500w')",
                }}
              ></div>
            </div>
            <div className="flex justify-center items-center w-full md:w-100">
              <p className="text-white text-base opacity-70 text-center">
                Ullamcorper morbi tincidunt ornare massa eget. Velit sed
                ullamcorper morbi tincidunt.
              </p>
            </div>
          </div>

          <hr className="w-[80vw] h-1 mx-auto my-4 bg-[#D38E0C] border-0 rounded md:my-3" />

          <p className="text-white text-sm text-justify md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            cursus cursus libero, nec eleifend libero tincidunt sit amet. Mauris
            molestie lorem in justo dignissim fringilla. Ut luctus, nulla eget
            ultricies fermentum, est mi tristique augue, sed placerat arcu urna
            in dolor. Sed facilisis risus id diam rutrum pellentesque. Cras vel
            enim non enim lacinia commodo et sed metus. Vestibulum quis interdum
            velit. Phasellus finibus, velit et dignissim sollicitudin, justo
            ligula iaculis velit, vel vehicula nulla ex vel lectus. Nullam
            maximus eget dolor ullamcorper porta. Vivamus dolor tortor, finibus
            quis accumsan et, euismod non mi. Aenean efficitur eros ac mauris
            vehicula rhoncus. Vestibulum felis dolor, pretium sollicitudin mi
            posuere, ornare facilisis eros. Aliquam eget maximus elit. Nulla
            purus est, ornare non tempor ut, egestas eget dui. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Suspendisse pulvinar turpis cursus diam sollicitudin
            facilisis.
            <br /> <br />
            Etiam luctus volutpat nulla, sed volutpat nulla facilisis a. Sed
            quis convallis dolor. Fusce ornare ligula et sapien volutpat
            porttitor. Integer in massa massa. Suspendisse felis nulla,
            fermentum quis mauris vulputate, rhoncus lobortis eros. Vestibulum
            sodales mi cursus bibendum malesuada. Curabitur varius imperdiet
            orci, a gravida urna. Fusce in volutpat dui. Vestibulum elementum,
            diam elementum euismod pharetra, erat purus ornare lacus, sed
            sollicitudin elit urna eget enim. Aliquam sit amet tempor libero.
            Vivamus eu luctus orci. Praesent vitae egestas lectus. Vestibulum
            commodo odio quis iaculis blandit. Cras molestie porttitor libero eu
            tincidunt. Ut vehicula et ex ac porttitor. Aenean hendrerit
            elementum viverra.
            <br /> <br />
            Proin vel sem id magna tempus posuere. Curabitur ornare eget nulla
            sed fermentum. Nunc malesuada velit tortor, nec sodales libero
            volutpat vel. Fusce nisl magna, posuere in neque vestibulum, sodales
            vulputate arcu. Curabitur dolor eros, tristique nec nunc a, sodales
            congue leo. Donec congue fermentum iaculis. Donec vel dolor lorem.
            Suspendisse vulputate vulputate sem a ullamcorper. Fusce posuere
            nunc at maximus aliquam. Pellentesque placerat placerat suscipit.
            Nam nec aliquam lorem.
          </p>
        </div>
      </div>
    </>
  );
}
