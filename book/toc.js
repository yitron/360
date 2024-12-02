// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="charter.html">Charter</a></li><li class="chapter-item expanded affix "><a href="conduct.html">Conduct</a></li><li class="chapter-item expanded affix "><a href="routine.html">Routine</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Practices</li><li class="chapter-item expanded "><a href="practice/intro-to-secure-by-design.html"><strong aria-hidden="true">1.</strong> Secure By Design</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="practice/secure-sdlc-policy.html"><strong aria-hidden="true">1.1.</strong> Secure Software Development Lifecycle</a></li><li class="chapter-item expanded "><a href="practice/application-hardening-policy.html"><strong aria-hidden="true">1.2.</strong> Application Hardening</a></li><li class="chapter-item expanded "><a href="practice/transparency-policy.html"><strong aria-hidden="true">1.3.</strong> Transparency and Accountability</a></li><li class="chapter-item expanded "><a href="practice/secure-defaults-policy.html"><strong aria-hidden="true">1.4.</strong> Secure Defaults</a></li><li class="chapter-item expanded "><a href="practice/incident-management-policy.html"><strong aria-hidden="true">1.5.</strong> Incident Reporting and Management</a></li><li class="chapter-item expanded "><a href="practice/pro-security-practices-policy.html"><strong aria-hidden="true">1.6.</strong> Pro-Security Business Practices</a></li><li class="chapter-item expanded "><a href="practice/training-policy.html"><strong aria-hidden="true">1.7.</strong> Training and Workforce Development</a></li><li class="chapter-item expanded "><a href="practice/leadership-policy.html"><strong aria-hidden="true">1.8.</strong> Executive Oversight and Leadership</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Policies</li><li class="chapter-item expanded "><a href="policies/ISMS-POL-000/introduction.html"><strong aria-hidden="true">2.</strong> ISMS Manual</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="policies/ISMS-POL-000/introduction.html"><strong aria-hidden="true">2.1.</strong> introduction</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="policies/ISMS-POL-000/template.html"><strong aria-hidden="true">2.1.1.</strong> Resource</a></li><li class="chapter-item expanded "><a href="policies/ISMS-POL-000/work_instructions.html"><strong aria-hidden="true">2.1.2.</strong> Work Instructions</a></li><li class="chapter-item expanded "><a href="policies/ISMS-POL-000/document-control.html"><strong aria-hidden="true">2.1.3.</strong> Control</a></li></ol></li><li class="chapter-item expanded "><a href="policies/ISMS-POL-001/information-security-policy.html"><strong aria-hidden="true">2.2.</strong> information security policy</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="policies/ISMS-POL-001/template.html"><strong aria-hidden="true">2.2.1.</strong> Resource</a></li><li class="chapter-item expanded "><a href="policies/ISMS-POL-001/work_instructions.html"><strong aria-hidden="true">2.2.2.</strong> Work Instructions</a></li><li class="chapter-item expanded "><a href="policies/ISMS-POL-001/document-control.html"><strong aria-hidden="true">2.2.3.</strong> Control</a></li></ol></li><li class="chapter-item expanded "><a href="policies/ISMS-POL-002/access-control-policy.html"><strong aria-hidden="true">2.3.</strong> access control policy</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="policies/ISMS-POL-002/template.html"><strong aria-hidden="true">2.3.1.</strong> Resource</a></li><li class="chapter-item expanded "><a href="policies/ISMS-POL-002/work_instructions.html"><strong aria-hidden="true">2.3.2.</strong> Work Instructions</a></li><li class="chapter-item expanded "><a href="policies/ISMS-POL-002/document-control.html"><strong aria-hidden="true">2.3.3.</strong> Control</a></li></ol></li><li class="chapter-item expanded "><a href="policies/ISMS-POL-003/risk-management-policy.html"><strong aria-hidden="true">2.4.</strong> risk management policy</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="policies/ISMS-POL-003/template.html"><strong aria-hidden="true">2.4.1.</strong> Resource</a></li><li class="chapter-item expanded "><a href="policies/ISMS-POL-003/work_instructions.html"><strong aria-hidden="true">2.4.2.</strong> Work Instructions</a></li><li class="chapter-item expanded "><a href="policies/ISMS-POL-003/document-control.html"><strong aria-hidden="true">2.4.3.</strong> Control</a></li></ol></li><li class="chapter-item expanded "><a href="policies/ISMS-POL-004/data-protection-policy.html"><strong aria-hidden="true">2.5.</strong> data protection policy</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="policies/ISMS-POL-004/template.html"><strong aria-hidden="true">2.5.1.</strong> Resource</a></li><li class="chapter-item expanded "><a href="policies/ISMS-POL-004/work_instructions.html"><strong aria-hidden="true">2.5.2.</strong> Work Instructions</a></li><li class="chapter-item expanded "><a href="policies/ISMS-POL-004/document-control.html"><strong aria-hidden="true">2.5.3.</strong> Control</a></li></ol></li><li class="chapter-item expanded "><a href="policies/ISMS-POL-005/incident-management-policy.html"><strong aria-hidden="true">2.6.</strong> incident management policy</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="policies/ISMS-POL-005/template.html"><strong aria-hidden="true">2.6.1.</strong> Resource</a></li><li class="chapter-item expanded "><a href="policies/ISMS-POL-005/work_instructions.html"><strong aria-hidden="true">2.6.2.</strong> Work Instructions</a></li><li class="chapter-item expanded "><a href="policies/ISMS-POL-005/document-control.html"><strong aria-hidden="true">2.6.3.</strong> Control</a></li></ol></li><li class="chapter-item expanded "><a href="policies/ISMS-POL-006/business-continuity-policy.html"><strong aria-hidden="true">2.7.</strong> business continuity policy</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="policies/ISMS-POL-006/template.html"><strong aria-hidden="true">2.7.1.</strong> Resource</a></li><li class="chapter-item expanded "><a href="policies/ISMS-POL-006/work_instructions.html"><strong aria-hidden="true">2.7.2.</strong> Work Instructions</a></li><li class="chapter-item expanded "><a href="policies/ISMS-POL-006/document-control.html"><strong aria-hidden="true">2.7.3.</strong> Control</a></li></ol></li><li class="chapter-item expanded "><a href="policies/ISMS-POL-007/auditing-compliance-policy.html"><strong aria-hidden="true">2.8.</strong> auditing compliance policy</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="policies/ISMS-POL-007/template.html"><strong aria-hidden="true">2.8.1.</strong> Resource</a></li><li class="chapter-item expanded "><a href="policies/ISMS-POL-007/work_instructions.html"><strong aria-hidden="true">2.8.2.</strong> Work Instructions</a></li><li class="chapter-item expanded "><a href="policies/ISMS-POL-007/document-control.html"><strong aria-hidden="true">2.8.3.</strong> Control</a></li></ol></li><li class="chapter-item expanded "><a href="policies/ISMS-APP-001/appendices.html"><strong aria-hidden="true">2.9.</strong> appendices</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="policies/ISMS-APP-001/template.html"><strong aria-hidden="true">2.9.1.</strong> Resource</a></li><li class="chapter-item expanded "><a href="policies/ISMS-APP-001/work_instructions.html"><strong aria-hidden="true">2.9.2.</strong> Work Instructions</a></li><li class="chapter-item expanded "><a href="policies/ISMS-APP-001/document-control.html"><strong aria-hidden="true">2.9.3.</strong> Control</a></li></ol></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
