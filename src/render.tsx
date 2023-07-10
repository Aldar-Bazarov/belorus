import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import { createRoot } from "react-dom/client";
import { IStartAppEventArgs, IShellAppBeforeClose } from "@ois-design-ui/components";
import { ReactApplicationContainer } from "@containers/react-application-container";

export default function render(args: IStartAppEventArgs): void {
  const rootElement = document.getElementById(args.elementId);
  const root = createRoot(rootElement!);

  if (args.mediator) {
    args.mediator.once(
      `shell:app:triedToClose:${args.elementId}`,
      ({ closeFunc }: IShellAppBeforeClose) => {
        root.unmount();
        closeFunc();
      }
    );
  }

  root.render(<ReactApplicationContainer />);
}
