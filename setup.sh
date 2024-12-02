#!/bin/bash

# Define the base directory for the mdBook project
BASE_DIR="src"

# Define the paths for the ISMS policies
POLICY_PATHS=(
    "introduction.md|policies/ISMS-POL-000/introduction.md"
    "information-security-policy.md|policies/ISMS-POL-001/information-security-policy.md"
    "access-control-policy.md|policies/ISMS-POL-002/access-control-policy.md"
    "risk-management-policy.md|policies/ISMS-POL-003/risk-management-policy.md"
    "data-protection-policy.md|policies/ISMS-POL-004/data-protection-policy.md"
    "incident-management-policy.md|policies/ISMS-POL-005/incident-management-policy.md"
    "business-continuity-policy.md|policies/ISMS-POL-006/business-continuity-policy.md"
    "auditing-compliance-policy.md|policies/ISMS-POL-007/auditing-compliance-policy.md"
    "appendices.md|policies/ISMS-APP-001/appendices.md"
)

# Generate the ISMS policies directory structure and create necessary files
for POLICY in "${POLICY_PATHS[@]}"; do
    ORIGINAL_NAME="${POLICY%%|*}"       # Original file name
    CORRECTED_PATH="${POLICY##*|}"     # Path to be created
    POLICY_DIR=$(dirname "$CORRECTED_PATH") # Directory path for the policy

    # Create the directory for the policy if it doesn't exist
    FULL_POLICY_DIR="$BASE_DIR/$POLICY_DIR"
    mkdir -p "$FULL_POLICY_DIR"

    # Create the policy markdown file if it doesn't exist
    POLICY_FILE="$BASE_DIR/$CORRECTED_PATH"
    if [ ! -f "$POLICY_FILE" ]; then
        touch "$POLICY_FILE"
        echo "# $(basename "$ORIGINAL_NAME" .md | sed -E 's/-/ /g' | sed -E 's/\b(\w)/\u\1/g')" > "$POLICY_FILE"
        echo "Created: $POLICY_FILE"
    fi

    # Create `template.md` if it doesn't exist
    TEMPLATE_FILE="$FULL_POLICY_DIR/template.md"
    if [ ! -f "$TEMPLATE_FILE" ]; then
        touch "$TEMPLATE_FILE"
        echo "# Resource" > "$TEMPLATE_FILE"
        echo "Created: $TEMPLATE_FILE"
    fi

    # Create `work_instructions.md` if it doesn't exist
    WORK_INSTRUCTIONS_FILE="$FULL_POLICY_DIR/work_instructions.md"
    if [ ! -f "$WORK_INSTRUCTIONS_FILE" ]; then
        touch "$WORK_INSTRUCTIONS_FILE"
        echo "# Work Instructions" > "$WORK_INSTRUCTIONS_FILE"
        echo "Created: $WORK_INSTRUCTIONS_FILE"
    fi

    # Create `document-control.md` if it doesn't exist
    DOCUMENT_CONTROL_FILE="$FULL_POLICY_DIR/document-control.md"
    if [ ! -f "$DOCUMENT_CONTROL_FILE" ]; then
        touch "$DOCUMENT_CONTROL_FILE"
        echo "# Document Control" > "$DOCUMENT_CONTROL_FILE"
        echo "Created: $DOCUMENT_CONTROL_FILE"
    fi
done

# Define the content for the rest of the `SUMMARY.md`
OTHER_CONTENT=$(cat <<EOL
[For Programmers]
[Charter](charter.md)
[Conduct](conduct.md)
[Routine](routine.md)

---

# Practices

- [Secure By Design](practice/intro-to-secure-by-design.md)
    - [Secure Software Development Lifecycle](practice/secure-sdlc-policy.md)
    - [Application Hardening](practice/application-hardening-policy.md)
    - [Transparency and Accountability](practice/transparency-policy.md)
    - [Secure Defaults](practice/secure-defaults-policy.md)
    - [Incident Reporting and Management](practice/incident-management-policy.md)
    - [Pro-Security Business Practices](practice/pro-security-practices-policy.md)
    - [Training and Workforce Development](practice/training-policy.md)
    - [Executive Oversight and Leadership](practice/leadership-policy.md)

---
EOL
)

# Generate the ISMS Policies Section
ISMS_POLICIES_SECTION="# Policies\n\n- [ISMS Manual](policies/ISMS-POL-000/introduction.md)"
for POLICY in "${POLICY_PATHS[@]}"; do
    ORIGINAL_NAME="${POLICY%%|*}"
    CORRECTED_PATH="${POLICY##*|}"
    POLICY_NAME=$(echo "$ORIGINAL_NAME" | sed -E 's/-/ /g' | sed 's/.md//g' | sed -E 's/\b(\w)/\u\1/g')
    POLICY_DIR=$(dirname "$CORRECTED_PATH")

    ISMS_POLICIES_SECTION="$ISMS_POLICIES_SECTION\n    - [$POLICY_NAME]($CORRECTED_PATH)"
    ISMS_POLICIES_SECTION="$ISMS_POLICIES_SECTION\n        - [Resource]($POLICY_DIR/template.md)"
    ISMS_POLICIES_SECTION="$ISMS_POLICIES_SECTION\n        - [Work Instructions]($POLICY_DIR/work_instructions.md)"
    ISMS_POLICIES_SECTION="$ISMS_POLICIES_SECTION\n        - [Control]($POLICY_DIR/document-control.md)"
done

# Write to `SUMMARY.md`
SUMMARY_FILE="$BASE_DIR/SUMMARY.md"
echo -e "$OTHER_CONTENT\n---\n$ISMS_POLICIES_SECTION\n---" > "$SUMMARY_FILE"
echo "SUMMARY.md has been updated with ISMS policies and their related files."

