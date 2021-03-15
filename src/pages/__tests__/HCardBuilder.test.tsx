import React from "react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure, mount, ReactWrapper, shallow } from "enzyme";
import { act } from "react-dom/test-utils";
import { ThemeProvider } from "@material-ui/core";
import theme from "../../theme";

import testData from "../../data/testData.json";
import HCardBuilder from "../HCardBuilder";

configure({ adapter: new Adapter() });

describe("card builder", () => {
  it("takes a snapshot from the HCardBuilder component", () => {
    const wrapper = shallow(
      <ThemeProvider theme={theme}>
        <HCardBuilder />
      </ThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("checks to see if the card gets upadted whenever create button gets clicked", () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <HCardBuilder />
      </ThemeProvider>
    );
    let expectedValue: string;
    let inp: ReactWrapper;
    testData.map((td) => {
      inp = wrapper.find(`[data-testid="test${td.label}"]`);
      expect(inp.length).toBe(1);
      act(() => {
        inp.simulate("change", { target: { value: td.value } });
      });

      wrapper.update();
      if (td.label === "PHONE") {
        let newVal =
          td.value.substring(0, 2) +
          " " +
          td.value.substring(2, 6) +
          " " +
          td.value.substring(6, 11);
        expectedValue = newVal;
      } else {
        expectedValue =
          td.value.substring(0, 1).toUpperCase() + td.value.substring(1);
      }
      expect(inp.instance().value).toBe(expectedValue);
    });

    act(() => {
      wrapper.find('[data-testid="submitButton"]').at(0).simulate("click");
    });

    wrapper.update();

    const cardTitleComponent = wrapper.find('[data-testid="cardFullName"]');
    const expectedName =
      testData[0].value.substring(0, 1).toUpperCase() +
      testData[0].value.substring(1);
    const expectedSurName =
      testData[1].value.substring(0, 1).toUpperCase() +
      testData[1].value.substring(1);
    expect(cardTitleComponent.text()).toBe(
      expectedName + " " + expectedSurName
    );
  });
});
