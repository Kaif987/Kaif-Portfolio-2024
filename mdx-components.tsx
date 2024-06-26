import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from "next/image"
import Code from '@/components/ui/code';
import InlineCode from '@/components/ui/inline-code';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        code: (props) => {
            const { className, children } = props;
            if (className) {
                return <Code {...props} />;
            } else {
                return <InlineCode>{children}</InlineCode>;
            }
        },
        h1: (props) => <h1 className="text-4xl font-black pb-4" {...props} />,
        h2: (props) => <h2 className="text-3xl font-bold pb-2" {...props} />,
        h3: (props) => <h3 className="text-2xl font-semibold pb-2" {...props} />,
        h4: (props) => <h4 className="text-xl font-medium pb-2" {...props} />,
        h5: (props) => <h5 className="text-lg font-normal pb-2" {...props} />,
        h6: (props) => <h6 className="text-base font-light pb-2" {...props} />,
        p: (props) => <p className="text-lg pb-2" {...props} />,
        ol: (props) => <ol className="list-decimal" {...props} />,
        li: (props) => <li className="list-decimal" {...props} />
    };
}