# svgpwnage
example code to teach obfuscated vulnerabilities in svg

## This example shows potential issues
1. Minified/unreadable code supplied can be harmful when the person who implements this can't understand it.
2. Trusted colleagues with bad intentions or breached
3. Third parties with bad intentions or breached
4. Sidecar injection by supplied code; intentional or unintentionally (breached) (dependancies)
5. Breached front-ends can be harder to spot than compromised systems

## Don't blame
1. Writing hacks are made to fool/hide it's malicious intent
2. It's a specialized business
3. Co-workers under pressure may not see this and may trust the coder

## To prevent large parts
1. Use CSP rules to reject sending data to unknown targets
2. Don't accept supplied minified code
3. SISO/parties involved should have a signed agreement in case of data-breaches
4. Have a small team of various experts to take a look when implementing third party code
5. Use malware scanners like Acunetix etc to find these issues
