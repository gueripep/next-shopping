import { KameleoonClient, CustomData } from '@kameleoon/nodejs-sdk';
import { cookies } from 'next/headers';
import { KameleoonEventSource } from '@kameleoon/nodejs-event-source';
import { KameleoonRequester } from '@kameleoon/nodejs-requester';
import { KameleoonVisitorCodeManager } from '@kameleoon/nextjs-visitor-code-manager';

// --- Create KameleoonClient ---
const client = new KameleoonClient({
  siteCode: 'my_site_code',
  credentials: {
    clientId: 'my_id',
    clientSecret: 'my_secret',
  },
  externals: {
    eventSource: new KameleoonEventSource(),
    visitorCodeManager: new KameleoonVisitorCodeManager(),
    requester: new KameleoonRequester(),
  },
});

// --- Usage Example ---
async function init(): Promise<void> {
  // - Initialize KameleoonClient
  await client.initialize();

  // - Get visitor code
  const visitorCode = client.getVisitorCode({ cookies });

  // - Add associated data
  const customData = new CustomData(0, 'my_value');
  client.addData(visitorCode, customData);

  // -- Obtain feature flag variation
  const variation = client.getVariation({
    visitorCode,
    featureKey: 'my_feature_key',
    track: false,
  });

  // -- Obtain feature flag variation key
  const variationKey = variation.key;

  // -- Obtain feature flag variables from the variation
  const variables = variation.variables;

  const variable = variables.get("balls_amount");
  const variableValue = variable?.value || 0;

  console.log(variationKey);
  console.log(variableValue);
}

init();
