export class ValidationError extends Error {}

export const textField = (
  value: unknown,
  label: string,
  options: { required?: boolean; maxLength?: number } = {},
) => {
  const text = typeof value === 'string' ? value.trim() : ''
  const maxLength = options.maxLength ?? 200

  if (options.required && !text) throw new ValidationError(`${label} is required.`)
  if (text.length > maxLength) throw new ValidationError(`${label} must be ${maxLength} characters or fewer.`)
  return text
}

export const emailField = (value: unknown) => {
  const email = textField(value, 'Email', { required: true, maxLength: 254 }).toLowerCase()
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new ValidationError('Enter a valid email address.')
  }
  return email
}

export const readJsonObject = async (request: Request): Promise<Record<string, unknown>> => {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    throw new ValidationError('Request body must be valid JSON.')
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    throw new ValidationError('Request body must be an object.')
  }

  return body as Record<string, unknown>
}
