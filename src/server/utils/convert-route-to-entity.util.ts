const mapping: Record<string, string> = {
  chatbots: 'chatbot',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
