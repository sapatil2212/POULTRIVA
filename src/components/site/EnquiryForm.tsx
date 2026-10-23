import { Controller, useForm, type UseFormRegisterReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Children, cloneElement, isValidElement, useId, useState, type ReactElement } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { PRODUCTS } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { submitEnquiry } from "@/lib/submit-enquiry";
import { ProductMultiSelect } from "@/components/site/ProductMultiSelect";
import { SearchSelect } from "@/components/site/SearchSelect";
import { COUNTRIES, DEFAULT_COUNTRY, INDIA_STATE_NAMES } from "@/data/locations";
import { useMotionPreference } from "@/hooks/use-motion-preference";

const phone = z
  .string()
  .trim()
  .regex(/^[+]?[0-9\s-]{10,15}$/, "Enter a valid phone number");
const consent = z.literal(true, { errorMap: () => ({ message: "Please accept to continue" }) });

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone,
  email: z.string().trim().email("Enter a valid email").max(255),
  products: z.array(z.string()).min(1, "Select at least one product"),
  country: z.string().trim().min(1, "Select a country").max(80),
  state: z.string().trim().min(1, "Select a state").max(80),
  city: z.string().trim().min(1, "Select a city").max(80),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(1500),
  consent,
  website: z.string().max(0).optional(),
});

const COUNTRY_NAMES = COUNTRIES.map((country) => country.name);

const BUSINESS_TYPES = [
  "Poultry Farmer",
  "Feed Manufacturer",
  "Distributor",
  "Dealer",
  "Veterinary Professional",
  "Other",
];
const CATEGORIES = [
  "Product Information",
  "Bulk Enquiry",
  "Dealership",
  "Distribution Partnership",
  "Technical Information",
  "General Business Enquiry",
];

const businessSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  business: z.string().trim().min(2, "Please enter your business name").max(150),
  phone,
  email: z.string().trim().email("Enter a valid email").max(255),
  city: z.string().trim().min(2, "Required").max(80),
  state: z.string().trim().min(2, "Required").max(80),
  businessType: z.string().min(1, "Select a business type"),
  product: z.string().min(1, "Select a product"),
  category: z.string().min(1, "Select a category"),
  quantity: z.string().trim().max(100).optional(),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(1500),
  consent,
  website: z.string().max(0).optional(),
});

function Field({
  label,
  error,
  children,
  id,
  compact = false,
}: {
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
  id: string;
  compact?: boolean;
}) {
  return (
    <div className={`flex flex-col ${compact ? "gap-1.5" : "gap-2"}`}>
      <label
        htmlFor={id}
        className={`${compact ? "text-[0.68rem] tracking-[0.11em]" : "text-xs tracking-[0.14em]"} font-semibold uppercase text-navy`}
      >
        {" "}
        {label}
      </label>
      {Children.map(children, (child) =>
        isValidElement(child)
          ? cloneElement(
              child as ReactElement<{
                "aria-invalid"?: boolean;
                "aria-describedby"?: string | undefined;
                suppressHydrationWarning?: boolean;
              }>,
              {
                "aria-invalid": Boolean(error),
                "aria-describedby": error ? `${id}-error` : undefined,
                suppressHydrationWarning: true,
              },
            )
          : child,
      )}
      {error && (
        <p id={`${id}-error`} className="text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function SuccessPanel({
  title,
  email,
  onReset,
}: {
  title: string;
  email: string;
  onReset: () => void;
}) {
  const reduce = useMotionPreference();
  return (
    <div
      tabIndex={-1}
      aria-live="polite"
      className="rounded-[var(--radius-card)] border border-gold/30 bg-card p-6 shadow-sm sm:p-9"
    >
      <img
        src="/images/brand/Poultriva-dark.png"
        alt="POULTRIVA"
        width={180}
        height={43}
        className="h-9 w-auto object-contain"
      />
      <motion.span
        initial={reduce ? false : { scale: 0.7, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: reduce ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="mt-7 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold-cta"
      >
        <CheckCircle2 className="h-6 w-6" />
      </motion.span>
      <p className="eyebrow mt-5">Enquiry sent</p>
      <h3 className="mt-3 text-2xl font-semibold text-navy">{title}</h3>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
        We sent a confirmation to <span className="font-medium text-navy">{email}</span>. Our team
        has also received your details and will respond shortly.
      </p>
      <Button
        suppressHydrationWarning
        variant="link"
        type="button"
        onClick={onReset}
        className="mt-5 h-auto p-0 text-sm text-navy underline underline-offset-4"
      >
        Send another enquiry
      </Button>
    </div>
  );
}

function FormError({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <p
      className="sm:col-span-2 rounded-md bg-destructive/10 px-4 py-3 text-sm text-destructive"
      role="alert"
    >
      {message}
    </p>
  );
}

function SubmitButton({
  loading,
  label,
  compact = false,
}: {
  loading: boolean;
  label: string;
  compact?: boolean;
}) {
  return (
    <Button
      suppressHydrationWarning
      type="submit"
      disabled={loading}
      className={`btn-primary h-auto !rounded-full disabled:opacity-60 ${compact ? "!px-5 !py-2.5 !text-sm" : ""}`}
    >
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" /> Sending…
        </>
      ) : (
        label
      )}
    </Button>
  );
}

function Honeypot({ register }: { register: UseFormRegisterReturn }) {
  return (
    <div className="absolute -left-[9999px]" aria-hidden="true">
      <label htmlFor="website">Website</label>
      <input id="website" tabIndex={-1} autoComplete="off" suppressHydrationWarning {...register} />
    </div>
  );
}

export function ContactForm() {
  const [sentTo, setSentTo] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    control,
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: { products: [], country: DEFAULT_COUNTRY, state: "", city: "" },
  });

  const country = watch("country");
  const isIndia = country === "India";

  if (sentTo) {
    return (
      <SuccessPanel
        title="Thank you for contacting us."
        email={sentTo}
        onReset={() => {
          setSentTo(null);
          reset();
        }}
      />
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(async (data) => {
        setServerError(null);
        try {
          await submitEnquiry({
            data: {
              kind: "contact",
              name: data.name,
              phone: data.phone,
              email: data.email,
              product: data.products.join(", "),
              city: data.city,
              state:
                data.country === "India"
                  ? data.state
                  : `${data.state}${data.state ? ", " : ""}${data.country}`,
              message: data.message,
              page: window.location.href,
              website: data.website ?? "",
            },
          });
          setSentTo(data.email);
        } catch {
          setServerError("We couldn't send your enquiry. Please try again or contact us by phone.");
        }
      })}
      className="relative grid gap-4 sm:grid-cols-2"
    >
      <Honeypot register={register("website")} />
      <Field id="c-name" label="Full name" error={errors.name?.message} compact>
        <input
          id="c-name"
          className="contact-field"
          placeholder="Enter your full name"
          autoComplete="name"
          {...register("name")}
        />
      </Field>
      <Field id="c-phone" label="Phone number" error={errors.phone?.message} compact>
        <input
          id="c-phone"
          className="contact-field"
          type="tel"
          placeholder="Enter your phone or WhatsApp number"
          autoComplete="tel"
          {...register("phone")}
        />
      </Field>
      <Field id="c-email" label="Email address" error={errors.email?.message} compact>
        <input
          id="c-email"
          className="contact-field"
          type="email"
          placeholder="Enter your email address"
          autoComplete="email"
          {...register("email")}
        />
      </Field>
      <Controller
        control={control}
        name="products"
        render={({ field }) => (
          <ProductMultiSelect
            value={field.value}
            onChange={field.onChange}
            error={errors.products?.message}
            fullWidth={false}
          />
        )}
      />
      <div className="grid gap-4 sm:col-span-2 sm:grid-cols-3">
        <Controller
          control={control}
          name="country"
          render={({ field }) => (
            <SearchSelect
              label="Country"
              value={field.value}
              onChange={(next) => {
                field.onChange(next);
                setValue("state", "");
                setValue("city", "");
              }}
              options={COUNTRY_NAMES}
              placeholder="Select country"
              searchPlaceholder="Search country"
              error={errors.country?.message}
            />
          )}
        />
        {isIndia ? (
          <Controller
            control={control}
            name="state"
            render={({ field }) => (
              <SearchSelect
                label="State"
                value={field.value}
                onChange={field.onChange}
                options={INDIA_STATE_NAMES}
                placeholder="Select state"
                searchPlaceholder="Search state"
                error={errors.state?.message}
              />
            )}
          />
        ) : (
          <Field id="c-state" label="State / Region" error={errors.state?.message} compact>
            <input
              id="c-state"
              className="contact-field"
              placeholder="Enter your state or region"
              {...register("state")}
            />
          </Field>
        )}
        <Field id="c-city" label="City" error={errors.city?.message} compact>
          <input
            id="c-city"
            className="contact-field"
            placeholder="Enter your city"
            autoComplete="address-level2"
            {...register("city")}
          />
        </Field>
      </div>
      <div className="sm:col-span-2">
        <Field id="c-message" label="Message" error={errors.message?.message} compact>
          <textarea
            id="c-message"
            rows={4}
            className="contact-field resize-y"
            placeholder="Tell us about your poultry product requirement"
            {...register("message")}
          />
        </Field>
      </div>
      <Consent register={register("consent")} error={errors.consent?.message} compact />
      <FormError message={serverError} />
      <div className="sm:col-span-2">
        <SubmitButton loading={isSubmitting} label="Send enquiry" compact />
      </div>
    </form>
  );
}

function Consent({
  register,
  error,
  compact = false,
}: {
  register: UseFormRegisterReturn;
  error?: string | undefined;
  compact?: boolean;
}) {
  const id = useId();
  return (
    <div className="sm:col-span-2">
      <label
        htmlFor={id}
        className={`flex items-start text-muted-foreground ${compact ? "gap-2.5 text-xs leading-relaxed" : "gap-3 text-sm"}`}
      >
        <input
          id={id}
          type="checkbox"
          suppressHydrationWarning
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className="mt-1 h-4 w-4 shrink-0 accent-[var(--navy)]"
          {...register}
        />
        <span>
          I agree that POULTRIVA may use these details to respond to my enquiry, as described in the{" "}
          <Link to="/privacy-policy" className="text-navy underline">
            privacy policy
          </Link>
          .
        </span>
      </label>
      {error && (
        <p id={`${id}-error`} className="mt-2 text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function BusinessForm({ defaultProduct }: { defaultProduct?: string | undefined }) {
  const [sentTo, setSentTo] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof businessSchema>>({
    resolver: zodResolver(businessSchema),
    defaultValues: { product: defaultProduct ?? "" },
  });

  if (sentTo) {
    return (
      <SuccessPanel
        title="Your business enquiry has been sent."
        email={sentTo}
        onReset={() => {
          setSentTo(null);
          reset({ product: defaultProduct ?? "" });
        }}
      />
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(async (data) => {
        setServerError(null);
        try {
          await submitEnquiry({
            data: {
              kind: "business",
              name: data.name,
              business: data.business,
              phone: data.phone,
              email: data.email,
              city: data.city,
              state: data.state,
              businessType: data.businessType,
              product: data.product,
              category: data.category,
              ...(data.quantity ? { quantity: data.quantity } : {}),
              message: data.message,
              page: window.location.href,
              website: data.website ?? "",
            },
          });
          setSentTo(data.email);
        } catch {
          setServerError(
            "We couldn't send your business enquiry. Please try again or contact us by phone.",
          );
        }
      })}
      className="relative grid gap-6 sm:grid-cols-2"
    >
      <Honeypot register={register("website")} />
      <Field id="b-name" label="Full name" error={errors.name?.message}>
        <input id="b-name" className="field" autoComplete="name" {...register("name")} />
      </Field>
      <Field id="b-business" label="Business name" error={errors.business?.message}>
        <input
          id="b-business"
          className="field"
          autoComplete="organization"
          {...register("business")}
        />
      </Field>
      <Field id="b-phone" label="Mobile number" error={errors.phone?.message}>
        <input
          id="b-phone"
          className="field"
          type="tel"
          autoComplete="tel"
          {...register("phone")}
        />
      </Field>
      <Field id="b-email" label="Email" error={errors.email?.message}>
        <input
          id="b-email"
          className="field"
          type="email"
          autoComplete="email"
          {...register("email")}
        />
      </Field>
      <Field id="b-city" label="City" error={errors.city?.message}>
        <input id="b-city" className="field" autoComplete="address-level2" {...register("city")} />
      </Field>
      <Field id="b-state" label="State" error={errors.state?.message}>
        <input
          id="b-state"
          className="field"
          autoComplete="address-level1"
          {...register("state")}
        />
      </Field>
      <Field id="b-type" label="Business type" error={errors.businessType?.message}>
        <select id="b-type" className="field" {...register("businessType")}>
          <option value="">Select…</option>
          {BUSINESS_TYPES.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </Field>
      <Field id="b-product" label="Interested product" error={errors.product?.message}>
        <select id="b-product" className="field" {...register("product")}>
          <option value="">Select…</option>
          {PRODUCTS.map((product) => (
            <option key={product.slug}>{product.name}</option>
          ))}
          <option>Multiple products</option>
        </select>
      </Field>
      <Field id="b-cat" label="Enquiry category" error={errors.category?.message}>
        <select id="b-cat" className="field" {...register("category")}>
          <option value="">Select…</option>
          {CATEGORIES.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </Field>
      <Field id="b-qty" label="Expected quantity (optional)" error={errors.quantity?.message}>
        <input id="b-qty" className="field" {...register("quantity")} />
      </Field>
      <div className="sm:col-span-2">
        <Field id="b-msg" label="Message" error={errors.message?.message}>
          <textarea id="b-msg" rows={5} className="field" {...register("message")} />
        </Field>
      </div>
      <Consent register={register("consent")} error={errors.consent?.message} />
      <FormError message={serverError} />
      <div className="sm:col-span-2">
        <SubmitButton loading={isSubmitting} label="Send business enquiry" />
      </div>
    </form>
  );
}
