/**
 * Dynamic Form Type Keys targeting Web3Forms
 */
export type FormType = 'NEWSLETTER' | 'UNSUBSCRIBE' | 'CONTACT' | 'DONATE' | 'VOLUNTEER';

/**
 * Retrieves the corresponding Vite environment access token
 */
const getAccessKey = (type: FormType): string => {
  switch (type) {
    case 'NEWSLETTER':
      return import.meta.env.VITE_WEB3FORMS_NEWSLETTER_KEY || '';
    case 'UNSUBSCRIBE':
      return import.meta.env.VITE_WEB3FORMS_UNSUBSCRIBE_KEY || '';
    case 'CONTACT':
      return import.meta.env.VITE_WEB3FORMS_CONTACT_KEY || '';
    case 'DONATE':
      return import.meta.env.VITE_WEB3FORMS_DONATE_KEY || '';
    case 'VOLUNTEER':
      return import.meta.env.VITE_WEB3FORMS_VOLUNTEER_KEY || '';
    default:
      return '';
  }
};

/**
 * Centralized Form submission engine for Johar Foundation
 * @param type Target configuration form action type
 * @param data Flat object containing key-value pairs from form fields
 */
export const submitToWeb3Forms = async (
  type: FormType, 
  data: Record<string, any>
): Promise<{ success: boolean; message: string }> => {
  const accessKey = getAccessKey(type);

  if (!accessKey) {
    console.error(`Web3Forms Error: Missing access key token for [${type}] context.`);
    return { 
      success: false, 
      message: 'Form submittal misconfigured. Token variant missing.' 
    };
  }

  // Pre-formatting metadata headers for Web3Forms dashboards
  const payload = {
    access_key: accessKey,
    subject: `New Submission: ${type.charAt(0) + type.slice(1).toLowerCase()} Form`,
    from_name: "Johar Foundation Automation",
    ...data
  };

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (result.success) {
      return { success: true, message: result.message || 'Submission successful.' };
    } else {
      return { success: false, message: result.message || 'API rejected data payload.' };
    }
  } catch (error) {
    console.error('Network failure executing Web3Forms API fetch:', error);
    return { 
      success: false, 
      message: 'Network operational connection error. Please try again.' 
    };
  }
};