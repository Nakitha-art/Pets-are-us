import React from "react";

import { Column, Stack, Row, Img, Text, List, Button, Input } from "components";

const PetsareusPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-quicksand items-center justify-start mx-[auto] w-[100%]">
        <Stack className="2xl:h-[1025px] 3xl:h-[1230px] lg:h-[729px] xl:h-[911px] w-[100%]">
          <Column className="absolute items-center justify-start w-[100%]">
            <Row className="items-center justify-evenly w-[100%]">
              <Img
                src="images/img_rectangle1.png"
                className="2xl:h-[1025px] 3xl:h-[1230px] lg:h-[729px] xl:h-[911px] w-[50%]"
                alt="RectangleOne"
              />
              <Img
                src="images/img_rectangle2.png"
                className="2xl:h-[1025px] 3xl:h-[1230px] lg:h-[729px] xl:h-[911px] w-[50%]"
                alt="RectangleTwo"
              />
            </Row>
          </Column>
          <header className="absolute top-[0] w-[100%]">
            <Row className="backdrop-opacity-[0.5] bg-gradient  blur-[200.00px] items-center lg:p-[27px] xl:p-[34px] 2xl:p-[39px] 3xl:p-[46px] w-[100%]">
              <Row className="items-center lg:mb-[22px] xl:mb-[27px] 2xl:mb-[31px] 3xl:mb-[37px] ml-[1px] w-[97%]">
                <Text className="text-amber_600 w-[auto]" as="h3" variant="h3">
                  Woof Meets
                </Text>
                <Row className="items-center mb-[1px] lg:ml-[34px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[58px] p-[2px] rounded-radius16 w-[15%]">
                  <Img
                    src="images/img_location.svg"
                    className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                    alt="location"
                  />
                  <Text
                    className="ml-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] not-italic text-white_A700 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Become Sittter
                  </Text>
                </Row>
                <Row className="items-center justify-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mt-[1px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius16 w-[17%]">
                  <Img
                    src="images/img_search.svg"
                    className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                    alt="search"
                  />
                  <Text
                    className="ml-[4px] 3xl:mr-[10px] lg:mr-[6px] xl:mr-[8px] 2xl:mr-[9px] not-italic text-white_A700 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Search Sittter
                  </Text>
                </Row>
                <List
                  className="lg:gap-[5px] xl:gap-[7px] 2xl:gap-[8px] 3xl:gap-[9px] grid grid-cols-2 min-h-[auto] lg:ml-[256px] xl:ml-[321px] 2xl:ml-[361px] 3xl:ml-[433px] mt-[1px] w-[18%]"
                  orientation="horizontal"
                >
                  <Column className="items-end justify-start p-[4px] rounded-radius16 w-[100%]">
                    <Text
                      className="lg:my-[4px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] not-italic text-gray_100 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Sign Up
                    </Text>
                  </Column>
                  <Column className="items-end justify-start xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius16 w-[100%]">
                    <Text
                      className="lg:mr-[3px] xl:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] not-italic text-gray_100 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Sign In
                    </Text>
                  </Column>
                </List>
              </Row>
            </Row>
          </header>
          <Column className="absolute bottom-[7%] inset-x-[0] items-center justify-start mx-[auto] w-[50%]">
            <Text
              className="leading-[normal] text-center text-shadow-ts text-white_A700 w-[100%]"
              as="h2"
              variant="h2"
            >
              <span className="text-white_A700 font-quicksand font-bold lg:text-[45px] xl:text-[56px] 2xl:text-[64px] 3xl:text-[76px]">
                Loving{" "}
              </span>
              <span className="text-amber_600 font-quicksand font-bold lg:text-[45px] xl:text-[56px] 2xl:text-[64px] 3xl:text-[76px]">
                pet
              </span>
              <span className="text-white_A700 font-quicksand font-bold lg:text-[45px] xl:text-[56px] 2xl:text-[64px] 3xl:text-[76px]">
                {" "}
                care in your
                <br />
                neighborhood
              </span>
              <span className="text-amber_600 font-quicksand font-bold lg:text-[45px] xl:text-[56px] 2xl:text-[64px] 3xl:text-[76px]">
                ™
              </span>
            </Text>
            <Text
              className="leading-[normal] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] text-amber_600 text-center w-[100%]"
              as="h4"
              variant="h4"
            >
              Book trusted sitters and dog walkers.
              <br />
              <br />
            </Text>
            <Column className="bg-gray_800_7f items-center justify-start lg:mt-[100px] xl:mt-[125px] 2xl:mt-[141px] 3xl:mt-[169px] lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius16 w-[96%]">
              <Column className="items-center justify-start lg:mb-[13px] xl:mb-[16px] 2xl:mb-[19px] 3xl:mb-[22px] w-[96%]">
                <Row className="items-center justify-center w-[59%]">
                  <Button className="font-semibold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center w-[48%]">
                    Dog
                  </Button>
                  <Button
                    className="font-semibold lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center w-[48%]"
                    variant="OutlineWhiteA700_1"
                  >
                    Cat
                  </Button>
                </Row>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[43%]"
                  orientation="vertical"
                >
                  <Row className="items-center mx-[auto] lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] w-[89%]">
                    <Img
                      src="images/img_arrowleft.svg"
                      className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                      alt="arrowleft"
                    />
                    <Text className="rowarrowleft" as="h6" variant="h6">
                      For When You're Away
                    </Text>
                    <Img
                      src="images/img_arrowright.svg"
                      className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                      alt="arrowright"
                    />
                  </Row>
                  <Row className="bg-black_900_7f items-center lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius8 w-[100%]">
                    <Img
                      src="images/img_home.svg"
                      className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] my-[3px] lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                      alt="home"
                    />
                    <Text className="rowarrowleft" as="h6" variant="h6">
                      House Sitting
                    </Text>
                    <Img
                      src="images/img_arrowup.svg"
                      className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] 3xl:ml-[100px] lg:ml-[59px] xl:ml-[74px] 2xl:ml-[84px] my-[3px] lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                      alt="arrowup"
                    />
                  </Row>
                </List>
                <Row className="items-center justify-between lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                  <Row className="items-center justify-between w-[66%]">
                    <Input
                      className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] placeholder:text-white_A700_72 text-white_A700_72 w-[100%]"
                      wrapClassName="w-[49%]"
                      type="number"
                      name="GroupFour"
                      placeholder="Zip code or Address"
                    ></Input>
                    <Row className="bg-black_900_7f items-center justify-end lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius8 w-[49%]">
                      <Text
                        className="lg:my-[4px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] not-italic text-white_A700_72 w-[auto]"
                        variant="body1"
                      >
                        Drop off
                      </Text>
                      <Text
                        className="lg:ml-[39px] xl:ml-[49px] 2xl:ml-[56px] 3xl:ml-[67px] text-white_A700 w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        DD/MM/YYYY
                      </Text>
                      <Img
                        src="images/img_arrowup.svg"
                        className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                        alt="arrowup One"
                      />
                    </Row>
                  </Row>
                  <Row className="bg-black_900_7f items-center justify-end lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius8 w-[33%]">
                    <Text
                      className="lg:my-[4px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] not-italic text-white_A700_72 w-[auto]"
                      variant="body1"
                    >
                      Pick up
                    </Text>
                    <Text
                      className="lg:ml-[44px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] text-white_A700 w-[auto]"
                      as="h1"
                      variant="h1"
                    >
                      DD/MM/YYYY
                    </Text>
                    <Img
                      src="images/img_arrowup.svg"
                      className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[8px]"
                      alt="arrowup Two"
                    />
                  </Row>
                </Row>
                <Button
                  className="2xl:mt-[16px] 3xl:mt-[19px] flex items-center justify-center lg:mt-[11px] text-center w-[13%] xl:mt-[14px]"
                  leftIcon={
                    <Img
                      src="images/img_arrowup.svg"
                      className="text-center lg:w-[8px] lg:h-[9px] lg:mr-[5px] xl:w-[10px] xl:h-[11px] xl:mr-[7px] 2xl:w-[12px] 2xl:h-[13px] 2xl:mr-[8px] 3xl:w-[14px] 3xl:h-[15px] 3xl:mr-[9px]"
                      alt="arrow_up"
                    />
                  }
                  shape="RoundedBorder8"
                  variant="FillBlack9007f"
                >
                  <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px]">
                    Size
                  </div>
                </Button>
                <Button
                  className="font-semibold lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center w-[33%]"
                  shape="RoundedBorder8"
                  size="sm"
                  variant="FillAmber600"
                >
                  Search
                </Button>
              </Column>
            </Column>
          </Column>
        </Stack>
      </Column>
    </>
  );
};

export default PetsareusPage;
