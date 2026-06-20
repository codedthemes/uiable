"use client";

import { use, useEffect, useState } from "react";

//  ------------------------------ | PAGE - PREVIEW | ------------------------------  //

export default function PreviewPage({
  params: paramsPromise
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const params = use(paramsPromise);
  let filePath = params.slug.join("/");
  if (filePath.startsWith("src/")) {
    filePath = filePath.substring(4);
  }
  const [Comp, setComp] = useState<any>(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        let mod;
        try {
          mod = await import(`@/components/uiable/blocks/${filePath}.tsx`);
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (_err) {
          mod = await import(`@/components/uiable/${filePath}.tsx`);
        }
        if (mounted) {
          const component =
            mod.default ||
            mod.Component ||
            Object.values(mod).find((v) => typeof v === "function");
          setComp(() => component);
        }
      } catch (_err) {
        console.error("Preview import failed for", filePath, _err);
        if (mounted) {
          // eslint-disable-next-line react/display-name
          setComp(() => () => (
            <div className="text-destructive text-sm p-4 border rounded bg-card">
              Component not found: {filePath}
            </div>
          ));
        }
      }
    };
    load();
    return () => {
      mounted = false;
    };
  }, [filePath]);

  if (!Comp) {
    return <div className="h-20 w-full animate-pulse bg-card" />;
  }

  return (
    <div className="min-h-screen bg-card">
      <Comp />
    </div>
  );
}
