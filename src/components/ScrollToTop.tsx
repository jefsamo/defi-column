import { IconArrowUp } from "@tabler/icons-react";
import { useWindowScroll } from "@mantine/hooks";
import { Affix, Tooltip, Button, Text, Transition, rem } from "@mantine/core";

function ScrollToTop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Affix position={{ bottom: rem(20), right: rem(20) }}>
        <Transition transition="slide-up" mounted={scroll.y > 200}>
          {(transitionStyles) => (
            <Tooltip label="Scroll to Top" withArrow>
              <Button
                leftIcon={<IconArrowUp size="1rem" />}
                onClick={() => scrollTo({ y: 0 })}
                sx={{
                  color: "white",
                  fontSize: "1.8rem",
                  lineHeight: 1.4,
                  background: "black",
                  padding: "0",
                  textAlign: "center",
                  "&:hover": {
                    backgroundColor: "#eee",
                  },
                }}
              ></Button>
            </Tooltip>
          )}
        </Transition>
      </Affix>
    </>
  );
}

export default ScrollToTop;
